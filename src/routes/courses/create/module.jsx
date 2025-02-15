import React, { useState } from "react";
import CourseModal from "./CourseModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courses, setCourses] = useState([]);

  const handleSave = (course) => {
    setCourses([...courses, course]);
    console.log("New Course:", course);
  };

  return (
    <div>
    <div className="p-6">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-20 py-4 text-xl font-bold bg-blue-600 text-white rounded"
      >
        Add New Module
      </button>

      <CourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </div>
    

    </div>
  );
};

export default App;
