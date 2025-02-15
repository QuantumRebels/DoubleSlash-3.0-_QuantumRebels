import React, { useEffect,useState } from "react";
import Course1 from '../../assets/courses/course1.jpg'
import Course2 from '../../assets/courses/course2.jpg'
import Course3 from '../../assets/courses/course3.jpg'
import Course4 from '../../assets/courses/course4.jpg'
import Course5 from '../../assets/courses/course5.jpg'
import axios from 'axios'
import { useNavigate } from "react-router-dom";





const CourseCard = ({ course }) => {
  const [modules, setmodules] = useState([])
  const fetchmodules=async()=>{
      await axios.get(`${import.meta.env.VITE_DEV_URL}study/getmodules`)
      .then((res)=>{
        console.log(res)
        setmodules(res.data.data)
        // modules=res.data.data
        console.log(modules)
      })
      
  }
  useEffect(()=>{
    fetchmodules()
  },[])

  const navigate=useNavigate()
  const routetopage=(id)=>{
    console.log(id)
    navigate(`courses/${id}`)
  }

  return (
    <main className="grid grid-cols-3 space-x-10 mt-12">

    {modules.map((module,idx)=>(
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
          <a href={`/courses/${module.id}`}>
        <button  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Explore Course
        </button>
        </a>
        <p>{module.moduleprice}</p>
        </div>
      </div>
    </div>
    ))}
    
    </main>
  );
};

// const CourseGrid = () => {
//   return (
//     <div className="max-w-6xl mx-auto py-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//         {modules.map((course) => (
//           <CourseCard key={course.id} course={course} />
//         ))}
//       </div>
//     </div>
//   );
// };

export default CourseCard;
