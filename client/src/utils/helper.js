export const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regex.test(email);
};

export const getInitials = (name) =>{
    if(!name) return ""

    const words = name.split(" ");
    let initials = " ";
    for (let i =0; i<Math.min(words.length,2);i++){
        initials += words[i][0];
    }

    return initials.toUpperCase();
}