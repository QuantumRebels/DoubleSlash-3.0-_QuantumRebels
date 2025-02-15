import React from "react";
import Module from './module'
import Lesson from './lesson'
const Create = () => {
  return (
    <div className="flex flex-row justify-between">
      <Module/>
      <Lesson/>
    </div>
  )
}

export default Create