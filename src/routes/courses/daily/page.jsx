import React, { useState } from "react";


const CourseLockPage = () => {
return (
  <div className="flex flex-col items-center justify-center min-h-screen -mt-24 p-6">
    <div className=" p-6 rounded-lg shadow-lg text-center max-w-md course-card">


      <h2 className="text-3xl font-bold  text-red-600">🔒 Course Locked!</h2>
      <p className="text-gray-200 mt-2">
        This course is currently locked. You need to purchase it to gain full access.
      </p>
      <button
      
        className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        💰 Purchase Course
      </button>

    </div>
  </div>
);
}


export default CourseLockPage;
