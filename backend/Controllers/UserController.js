import prisma from '../db.js'

const createUser=async(username,email,password,userRole)=>{
    return await prisma.userCredentials.create({
        data:{username,email,password,userRole}
    })
}



const login=async(email,password,userRole)=>{
    const user= await prisma.userCredentials.findUnique({
        where:{email:email}
    })
    if(user){
        if(user.userRole==userRole){

            if(user.password===password){
                return "LoginSuccess"
            }
            return "Wrong Password"
        }
        return "Invalid User Role"
    }
    return "Invalid Credentials"
}



export {createUser,login}

