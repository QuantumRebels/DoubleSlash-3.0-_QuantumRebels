import prisma from "../db.js";

import dotenv from 'dotenv'
dotenv.config();


import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const createModule = async (title, description, category, teacherId) => {
  return await prisma.module.create({
    data: { title, description, category, teacherId },
  });
};

const getModules=async()=>{
  return await prisma.module.findMany();
}

const createLesson = async (title, signImgUrl, moduleId) => {
  return await prisma.lesson.create({
    data: { title, signImgUrl, moduleId },
  });
};

const getLessonsByModuleId=async(moduleId)=>{
    return await prisma.lesson.findMany({where:{moduleId}});
}

const userprogressupdates=async(userId,question ,attemptedanswer ,correctanswer,timetaken ,isCorrect)=>{
  
    return await prisma.userProgress.create({
      data:{userId,question ,attemptedanswer ,correctanswer,timetaken ,isCorrect}
    })

}

const moduleprogressupdates=async(userId,moduleId,moduleCompletion )=>{

  return await prisma.modulecompletion.create({
    data:{userId,moduleId,moduleCompletion}
  })
}

const generateQuestion = async (modulename) => {
  try {
    
    const prompt = `Is the statement "${claim}" true? Please provide the response in the following JSON format:
   {
      "fact": "real fact",
      "sources": [
        "source_url_1",
        "source_url_2"
      ]
    } just the object and no extra text or special character in response`;
    const response1 = await model.generateContent(prompt);
    console.log(response1.response.text());

    const responseData = JSON.parse(response1.response.text());
    console.log(responseData.fact);

    return responseData;
  } catch (error) {
    console.error("Error fetching fact check data:", error);
    return error.message;
  }
};


const addContent = async (lessonId, moduleId, content, signImgUrl) => {
  return await prisma.content.create({
    data: { lessonId, moduleId, content, signImgUrl },
  });
};


const createExercise=async(moduleId,lessonId,question,options,answer)=>{
    return await prisma.exercise.create({data:{
        moduleId,
        lessonId,
        question,
        options,
        answer
    }})
}

const updateresult=async(userId,exerciseId,isCorrect)=>{
    return await prisma.result.create({data:{
        userId,
        exerciseId,
        isCorrect
    }})
}






export {createModule,getModules,createLesson,getLessonsByModuleId,createExercise,generateQuestion,addContent,updateresult,userprogressupdates,moduleprogressupdates}