import React from "react";

const TestList = ({ tests }) => {
  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-4 dark:text-blue-500">📝 Your Tests</h2>
      {tests.map((test) => (
        <div key={test.id} className="p-3 border rounded-lg mb-2 shadow-sm dark:bg-slate-950">
          <h3 className="text-xl font-bold  dark:text-blue-500">{test.name}</h3>
          <p className="text-lg font-semibold  dark:text-gray-50 text-blue-500">Status: {test.completed ? "✅ Completed" : "⏳ Pending"}</p>
          <p className="text-md font-semibold  dark:text-gray-500 text-gray-500">Date: {new Date(test.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default TestList;
