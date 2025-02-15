import prisma from "../db.js"

const addcontent=async(word,signImageUrl)=>{
    return await prisma.content.create({
        data:{
            word:word,
            signImageUrl:signImageUrl
        }
    })
    
}

export  {addcontent}