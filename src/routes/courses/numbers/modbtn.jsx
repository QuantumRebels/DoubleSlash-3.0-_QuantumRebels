import React, { useState } from "react";

const ModuleCompletion = () => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-lg w-80 mx-auto">
      {!completed ? (
        <button
          onClick={() => setCompleted(true)}
          className="px-6 py-2 bg-blue-500 text-white font-bold  rounded-lg hover:bg-blue-600 transition"
        >
          ✅ Mark Module as Completed
        </button>
      ) : (
        <button
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
        >
          🎯 Take Module Quiz Now
        </button>
      )}
    </div>
  );
};

export default ModuleCompletion;
