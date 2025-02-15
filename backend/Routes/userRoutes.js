import express from 'express';
import { createUser, login } from '../Controllers/UserController.js';
import generateToken from '../utils/generatetoken.js';

const userRouter=express.Router()

userRouter.post('/signup',async(req,res)=>{
    const {username,email , password,userRole}=req.body;
    const user=await createUser(username,email,password,userRole)
    const token=generateToken(user)
    res.json({user:user,token:token});
})

userRouter.post('/login',async(req,res)=>{
    const {email,password,userRole}=req.body;

    const user=await login(email,password,userRole)
    const token=generateToken(user)
    if(user){
        res.json({user:user,token:token});
    }else{
        res.status(401).json({message:'Invalid Credentials'})
    }
})

export default userRouter;