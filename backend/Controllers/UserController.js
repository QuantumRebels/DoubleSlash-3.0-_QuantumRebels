import prisma from '../db.js'
import * as bcrypt from 'bcrypt'

const createUser=async(username,email,password,userRole)=>{
    const hashedpassword=await bcrypt.hash(password,10);
    return await prisma.userCredentials.create({
        data:{username,email,password:hashedpassword,userRole}
    })
}



const login=async(email,password,userRole)=>{
    const user= await prisma.userCredentials.findUnique({
        where:{email:email}
    })
    if(user){
        if(user.userRole==userRole){
            const match=awaitbcrypt.compare(user.password,password)

            if(match){
                return "LoginSuccess"
            }
            return "Wrong Password"
        }
        return "Invalid User Role"
    }
    return "Invalid Credentials"
}

const getusers=async()=>{
    return await prisma.userCredentials.findMany()
}



export {createUser,login,getusers}

