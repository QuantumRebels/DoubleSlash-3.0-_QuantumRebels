import React, { useEffect, useState } from "react";
import Course1 from '../../assets/courses/course1.jpg'
import Course2 from '../../assets/courses/course2.jpg'
import Course3 from '../../assets/courses/course3.jpg'
import Course4 from '../../assets/courses/course4.jpg'
import Course5 from '../../assets/courses/course5.jpg'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";





const CourseCard = ({ course }) => {
  const { t } = useTranslation();
  const [modules, setmodules] = useState([])
  const fetchmodules = async () => {
    await axios.get(`${import.meta.env.VITE_DEV_URL}study/getmodules`)
      .then((res) => {
        console.log(res)
        setmodules(res.data.data)
        // modules=res.data.data
        console.log(modules)
      })

  }
  useEffect(() => {
    fetchmodules()
  }, [])


  return (

    <main className="grid grid-cols-3 space-x-10 mt-12">


      {modules.map((module, idx) => (
        <div key={idx} className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 transition-transform transform hover:scale-105">

          <img
            src={module.moduleimg}
            alt={module.title}
            className="w-full h-80 object-cover rounded-md"
          />
          <div className="mt-4">

            <h3 className="text-lg font-bold">{module.title}</h3>
            <p className="text-slate-950 mt-2 text-md">{module.description}</p>

            <div className="flex justify-between items-center">
              {module.moduleprice==='paid'?(
                <a href={`/courses/maths`}>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">

                  Explore Course
                </button>
              </a>
              ):(
                <a href={`/courses/${module.id}`}>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">

                  Explore Course
                </button>
              </a>
              )}
              
              <p>{module.moduleprice}</p>
            </div>
          </div>

        </div>
      ))}

    </main>
  );
};



export default CourseCard;
