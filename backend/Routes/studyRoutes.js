
import express from 'express'
import {addContent, createExercise, createLesson, createModule, getModules, updateresult} from '../Controllers/StudyControllers.js'

const studyRouter=express.Router();

studyRouter.post('/createmodule',async(req,res)=>{
    
    try {
        const {title,description ,category,teacherId}=req.body;
        const response=await createModule(title,description,category,teacherId);
        if(response){
            res.json({message:"Module created successfully",data:response})
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Error creating module"})
    }
})

studyRouter.post('/createLesson',async(req,res)=>{
    const {title, signImgUrl, moduleId}=req.body;

    const response=await createLesson(title, signImgUrl, moduleId);
    if(response){
        res.json({message:"Module created successfully",data:response})
    }
    else{
        res.status(400).json({message:"Error creating lesson"})
    }
})

studyRouter.post('/addcontent',async(req,res)=>{
    const {lessonId, moduleId, content, signImgUrl}=req.body;
    

    const response=await addContent(lessonId, moduleId, content, signImgUrl);
    if(response){
        res.json({message:"Content added successfully",data:response})
    }
    else{
        res.status(400).json({message:"Error adding content"})
    }
 
})

studyRouter.post('/createexercise',async(req,res)=>{
    const {moduleId,
        lessonId,
        question,
        options,
        answer}=req.body;

        const response=await createExercise(moduleId,
            lessonId,
            question,
            options,
            answer);
        if(response){
            res.json({message:"Exercise created successfully",data:response})
        }
        else{
            res.status(400).json({message:"Error creating exercise"})
        }
})

studyRouter.post('/updateresult',async(req,res)=>{
    const {userId,
        exerciseId,
        isCorrect}=req.body;
    const response=await updateresult(userId,
        exerciseId,
        isCorrect)
    if(response){
        res.json({message:"Result updated successfully",data:response})
    }
    else{
        res.status(400).json({message:"Error updating result"})
    }
})

studyRouter.get('/getmodules',async(req,res)=>{
    const response=await getModules();
    if(response){
        res.json({message:"Modules fetched successfully",data:response})
    }
    else{
        res.status(400).json({message:"Error fetching modules"})
    }
})

export default studyRouter