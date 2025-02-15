import React from "react";
import Course1 from '../../assets/courses/course1.jpg'
import Course2 from '../../assets/courses/course2.jpg'
import Course3 from '../../assets/courses/course3.jpg'
import Course4 from '../../assets/courses/course4.jpg'
import Course5 from '../../assets/courses/course5.jpg'



const courses = [
  {
    id: 1,
    title: "Alphabets in ISL",
    image: Course1,
    description: "Learn the Indian Sign Language alphabets with interactive visuals.",
  },
  {
    id: 2,
    title: "Numbers in ISL",
    image: Course2,
    description: "Understand number signs and counting in ISL with Interactive Modules",
  },
  {
    id: 3,
    title: "Mathematics of ISL",
    image: Course3,
    description: "Explore mathematical signs and problem-solving techniques in ISL.",
  },
  {
    id: 4,
    title: "Science through ISL ",
    image:Course4,
    description: "Dive into scientific concepts and their representation in ISL.",
  },
  {
    id: 5,
    title: "Daily Conversations of ISL",
    image: Course5,
    description: "Master everyday communication using ISL with Interactive Modules",
  },
];

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 transition-transform transform hover:scale-105">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-80 object-cover rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold">{course.title}</h3>
        <p className="text-slate-950 mt-2 text-md">{course.description}</p>
        <a href="/courses/alphabets">
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Explore Course
        </button>
        </a>
      </div>
    </div>
  );
};

const CourseGrid = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
