

import express from 'express';
import cors from 'cors'
import userRouter from './Routes/userRoutes.js';
import studyRouter from './Routes/studyRoutes.js';



const app=express()

app.use(express.json())
app.use(cors({
    origin: '*',
    
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
    
}))




app.get('/',async(req,res)=>{
    res.send("App is Working !!")
})



app.use('/auth',userRouter)

app.use('/study',studyRouter)
app.listen(5000,console.log("Server listening at port 5000"))