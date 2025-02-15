import React from "react";
import { Outlet } from "react-router-dom";

import CourseCard from "./coursegrid";
const Courses =()=> {
  return (
    <>
    <h1 className="text-4xl font-bold dark:text-blue-500 ml-2 ">Top Courses</h1>
  
    <CourseCard/>
    <Outlet/>
    </>
  )
}

export default Courses