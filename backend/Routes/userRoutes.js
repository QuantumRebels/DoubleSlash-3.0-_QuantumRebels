import express from 'express';
import { createUser, getusers, login, updateUser } from '../Controllers/UserController.js';
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

userRouter.get('/getusers',async(req,res)=>{
    const users=await getusers()
    if(users){
        res.json(users);
    }else{
        res.status(404).json({message:'No users found'})
    }
})

userRouter.put('/updateuser',async(req,res)=>{
    const {userId,profilepic}=req.body;
    const updatedUser=await updateUser(userId,profilepic)
    if(updateUser){
        res.json(updatedUser);
    }else{
        res.status(404).json({message:'User not found'})
    }
})

export default userRouter;