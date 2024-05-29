require('dotenv').config()

const config = require('./config.json');
const mongoose = require('mongoose');


mongoose.connect(config.connectionString);

//mern_auth..

const User = require("./models/user.model")

const express = require('express')
const cors = require('cors')
const app = express()

const jwt = require('jsonwebtoken');

const { authenticateToken } = require('./utilities')

app.use(express.json())

app.use(
    cors({
        origin:'*'
    })
)

app.get("/", (req,res) =>{
    res.json({data:"hello"})
}); 

//create

app.post("/create" , async(req,res) =>{

    const {fullName, email, password} = req.body;

    if(!fullName){
        return res
            .status(400)
            .json({error: true,message:"Full name required"})
    }
    if(!email){
        return res
            .status(400)
            .json({error: true,message:"email required"})
    }

    if(!password){
        return res
            .status(400)
            .json({error: true,message:"password required"})
    }


    const isUser = await User.findOne({email:email});

    if(isUser){
        return res.json({
            error:true,
            message:"User already exists"
        })
    }

    const user = new User({
        fullName,
        email,
        password
    });

    await user.save();

    const accessToken = jwt.sign({user},process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: "360000m"
    })

    return res.json({
        error: false,
        user,
        accessToken,
        message:"Registration successfull "
    })

});

app.post("/login" , async(req,res) =>{

    const {email, password} = req.body;

    if(!email){
        return res.status(400).json({
            message:"email is required"
        })
    }
    if(!password){
        return res.status(400).json({
            message:"password is required"
        })
    }

    const userInfo = await User.findOne({email:email});

    if(!userInfo){
        return res.status(400).json({message:"User not exist"})
    }

    if(userInfo.email == email && userInfo.password == password){

        const user = {user: userInfo};
        const accessToken =jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:"36000m"
        })

        return res.json({
            error:false,
            message:"Login successful",
            email,
            accessToken,
        })
    }else{
        return res.status(400).json({error:true,message:"Invaild credentials"});
    }



})

//get-user note
app.get("/get-user" , async(req,res) =>{

    const { user } = req.user;

    const isUser = await User.findOne({_id:user._id})

    if(!isUser){
        return res.sendStatus(401);
    }

    return res.json({
        user: {fullName:isUser.fullName, email:isUser,"_id":isUser._id, createdOn: isUser.createdOn},
        message:""
    })

})



app.listen('8000');

module.exports = app;