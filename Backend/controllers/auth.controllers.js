export const loginUser = ( req , res)=>{
    console.log("login user");
    res.send("login");
}


export const signUpUser = ( req , res)=>{
    console.log("signup user");
    res.send("signup ");
}

export const logoutUser = ( req , res)=>{
    console.log("logout user");
    res.send("logout");
}