import React from "react";
import Module from './module'
import Lesson from './lesson'
const Create = () => {
  return (
    <>
       <h1 className="text-3xl font-bold dark:text-blue-500 ml-6 mb-6">Create Modules and Lessons</h1>
    <div className="flex flex-row justify-between">
   
      <Module/>
      <Lesson/>
    </div>
    </>
  )
}

export default Create