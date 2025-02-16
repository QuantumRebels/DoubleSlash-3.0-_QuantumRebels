import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ModuleCompletion = () => {
  const [completed, setCompleted] = useState(false);
  const {id}=useParams()
 
  const markcompleted=()=>{
    axios.post(`${import.meta.env.VITE_DEV_URL}study/modulecompleted`,{userId:"192ee0b0-c661-4884-b081-6a84397474d9",moduleId:id,moduleCompletion:true})
    .then(res=>{
     
      setCompleted(true)
      
    })
  }
  const checkcompleted=async()=>{
    await axios.get(`${import.meta.env.VITE_DEV_URL}study/completedmodules`,{userId:"192ee0b0-c661-4884-b081-6a84397474d9",moduleId:id})
    .then(res=>{
      console.log(res.data.data)
      if(res.data.data[0].moduleCompletion===true){
        setCompleted(true)
      }
    })
  }
  useEffect(()=>{
    
    checkcompleted()
  },[])

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-lg w-80 mx-auto">
      {!completed ? (
        <button
          onClick={markcompleted}
          className="px-6 py-2 bg-blue-500 text-white font-bold  rounded-lg hover:bg-blue-600 transition"
        >
          ✅ Mark Module as Completed
        </button>
      ) : (
        <button
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
        >
          🎯 Take Module Quiz Now
        </button>
      )}
    </div>
  );
};

export default ModuleCompletion;
