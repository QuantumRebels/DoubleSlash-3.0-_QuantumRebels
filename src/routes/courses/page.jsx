import React from "react";
import { Outlet } from "react-router-dom";
import CousreGrid from './coursegrid'
const Courses =()=> {
  return (
    <>
    <h1 className="text-4xl font-bold dark:text-blue-500 ml-12 ">Top Courses</h1>
    <CousreGrid/>
    <Outlet/>
    </>
  )
}

export default Courses