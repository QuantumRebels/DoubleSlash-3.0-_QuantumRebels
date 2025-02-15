import prisma from "../db.js";

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

const progressUpdate=async(userId,moduleId,exerciseresult,progressing)=>{
    return await prisma.progress.create({data:{
        userId,
        moduleId,
        exerciseresult,
        progressing
    }})
}




export {createModule,getModules,createLesson,createExercise,addContent,updateresult,progressUpdate}