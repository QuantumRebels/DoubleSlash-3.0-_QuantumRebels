import React, { useState } from "react";

const CourseModule = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("alphabets");

  const handleSubmit = () => {
    if (!title || !imageUrl) {
      alert("Please fill all fields!");
      return;
    }
    onSave({ title, imageUrl, category });
    setTitle("");
    setImageUrl("");
    setCategory("alphabets");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[50%]">
        <h2 className="text-2xl   font-bold mb-4">Add New Lesson</h2>

        <label className="block text-md font-medium text-gray-800">Lesson Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mt-1"
          placeholder="Enter module title"
        />

        <label className="block text-md font-medium text-gray-800 mt-3">Image URL</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-2 border rounded mt-1"
          placeholder="Enter image URL"
        />

        <label className="block text-md font-medium text-gray-800 mt-3">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded mt-1"
        >
          <option value="alphabets">Alphabets of ISL</option>
          <option value="numbers">Numbers of ISL</option>
          <option value="maths">Maths of ISL</option>
          <option value="science">Science of ISL</option>
          <option value="daily">Daily Signs of ISL</option>
         
        </select>

        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded mr-2">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default CourseModule;
