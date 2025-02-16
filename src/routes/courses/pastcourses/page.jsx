import React, { useEffect, useState } from "react";
import Course1 from '../../../assets/courses/course1.jpg'
import Course2 from '../../../assets/courses/course2.jpg'
import axios from "axios";
const courses = [
  {
    id: 1,
    title: "ISL Alphabets",
    image: Course1 ,// Use actual image path
    description: "Learn the ISL Alphabets with our interactive course.",
  },
  {
    id: 2,
    title: "ISL Numbers",
    image: Course2 , // Use actual image path
    description: "Learn the ISL Numbers with our interactive course.",
  },
];

const CourseCards = () => {

  const [completedModules, setcompletedModules] = useState([])
  const userId='2ae7e645-fd38-42e6-bdf5-cce56a124e5e'
  const [modules, setmodules] = useState([])

  const fecthcompltedmodules=async()=>{
    await axios.get(`${import.meta.env.VITE_DEV_URL}study/completedmoduless`)
    .then(res=>{
      // console.log(res.data)  
      setcompletedModules(res.data.data)
    })
  }
  const fetchmodules=async()=>{
    await axios.get(`${import.meta.env.VITE_DEV_URL}study/getmodules`)
    .then(res=>{
      console.log(res.data)  
      setmodules(res.data.data)
    })
  }
  useEffect(()=>{
    fecthcompltedmodules()
    fetchmodules()
  },[])

  const filteredmodules=completedModules.filter((mod)=>(mod.userId===userId)) 
  console.log(filteredmodules)

  const moduleIds = filteredmodules.map((mod) => mod.moduleId);

  const matchedModules = modules.filter((mod) => moduleIds.includes(mod.id));
  console.log(matchedModules)

  return (
    <div>
      <h1 className="text-3xl font-bold dark:text-blue-500">Completed Courses</h1>
    <div className="flex gap-6 dark:bg-gray-900 p-6 mt-6 rounded-xl">
      
      {matchedModules.map((course) => (
        <div
          key={course.id}
          className="bg-white p-4 rounded-lg shadow-lg w-80"
        >
          <img
            src={course.moduleimg}
            alt={course.title}
            className="rounded-lg w-full h-72 object-cover"
          />
          <h2 className="text-lg font-bold mt-4">{course.title}</h2>
          <p className="text-gray-600">{course.description}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Completed Course
            </p>
            
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CourseCards;
