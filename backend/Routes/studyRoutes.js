
import express from 'express'
import {addContent, createExercise, createLesson, createModule, getcompletemodules, getLessonsByModuleId, getmodulebyId, getModules, moduleprogressupdates, updateresult, userprogressupdates} from '../Controllers/StudyControllers.js'

const studyRouter=express.Router();

studyRouter.post('/createmodule',async(req,res)=>{
    
    try {
        const {title,description ,category,teacherId,moduleimg,moduleprice}=req.body;
        const response=await createModule(title,description,category,teacherId,moduleimg,moduleprice);
        if(response){
            res.json({message:"Module created successfully",data:response})
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Error creating module"})
    }
})

studyRouter.get('/getmodules',async(req,res)=>{
    try {
        const response=await getModules()
        if(response){
            res.json({data:response})
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Error getting modules"})
    }
})

studyRouter.get('/getmodule',async(req,res)=>{
    const {moduleId}=req.query;
    const response=await getmodulebyId(moduleId)
    if(response){
        res.json({data:response})
    }
    else{
        res.status(400).json({message:"Module not found"})
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

studyRouter.get('/getlesson',async(req,res)=>{
    const {moduleId}=req.query;
    const response=await getLessonsByModuleId(moduleId);
    if(response){
        res.json({data:response})
    }
    else{
        res.status(400).json({message:"Error getting lesson"})
    }
})

studyRouter.post('/addattempted',async(req,res)=>{
    try {
        const {userId,question ,attemptedanswer ,correctanswer,timetaken ,isCorrect}=req.body;
        const response=await userprogressupdates(userId,question ,attemptedanswer ,correctanswer,timetaken ,isCorrect)
        if(response){
            res.json({message:"Progress updated successfully",data:response})
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Error updating progress"})
    }
})

studyRouter.post('/modulecompleted',async(req,res)=>{
    try {
        const {userId,moduleId,moduleCompletion}=req.body;
        const response=await moduleprogressupdates(userId,moduleId,moduleCompletion)
        if(response){
            res.json({message:"Module completed successfully",data:response})
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Error updating module completion"})
    }
})

studyRouter.get('/completedmodules',async(req,res)=>{
    const {userId,moduleId}=req.body;
    const response=await getcompletemodules(userId,moduleId)
    if(response){
        res.json({data:response})
    }
    else{
        res.status(400).json({message:"Error getting completed modules"})
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


export default studyRouter