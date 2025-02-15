import React, { useState } from "react";
import LessonModule from "./LessonModule";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modules, setModules] = useState([]);

  const handleSave = (module) => {
    setModules([...modules, module]);
    console.log("New Module:", module);
  };

  return (
    <div className="p-6">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-20 py-4 font-bold text-xl bg-blue-600 text-white rounded"
      >
        Add New Lesson
      </button>

      <LessonModule
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default App;
