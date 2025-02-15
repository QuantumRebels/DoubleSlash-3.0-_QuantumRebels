import React from "react";
import Course1 from '../../../assets/courses/course1.jpg'
import Course2 from '../../../assets/courses/course2.jpg'
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
  return (
    <div>
      <h1 className="text-3xl font-bold dark:text-blue-500">Completed Courses</h1>
    <div className="flex gap-6 dark:bg-gray-900 p-6 mt-6 rounded-xl">
      
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white p-4 rounded-lg shadow-lg w-80"
        >
          <img
            src={course.image}
            alt={course.title}
            className="rounded-lg w-full h-72 object-cover"
          />
          <h2 className="text-lg font-bold mt-4">{course.title}</h2>
          <p className="text-gray-600">{course.description}</p>
          <div className="flex justify-between items-center mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Completed Course
            </button>
            
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CourseCards;
