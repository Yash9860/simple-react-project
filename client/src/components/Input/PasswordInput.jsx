import React, { useState } from 'react'

import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6'

const PasswordInput = ({value, onChange, placeholder}) => {

    const [isShowPassword, setisShowPassword]= useState(false);

    const toggleShowPassword =()=>{
        setisShowPassword(!isShowPassword);
    };
  return (
    <div className='flex items-center bg-transperent border-[1.5px] px-5 rounded mn-3'>
        <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? 'text':'password'}
        placeholder={placeholder || "Password "}
        className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none'
        />

        <FaRegEye
            size={22}
            className="text-primary curson-pointer"
            onClick={()=> toggleShowPassword()}
        />
    </div>
  )
}

export default PasswordInput
