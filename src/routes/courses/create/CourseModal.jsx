import React, { useState } from "react";
import { FaUpload } from "react-icons/fa"; // Importing Upload Icon

const CourseModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("alphabets");
  const [pricing, setPricing] = useState("free");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    if (!title || !description || !image) {
      alert("Please fill all fields and upload an image!");
      return;
    }
    onSave({ title, description, category, pricing, image });
    setTitle("");
    setDescription("");
    setCategory("alphabets");
    setPricing("free");
    setImage(null);
    onClose();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Convert file to URL for preview
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[50%]">
        <h2 className="text-2xl font-bold mb-4">Add New Module</h2>

        <label className="block text-md font-medium text-gray-800">Course Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mt-1 text-black"
          placeholder="Enter course title"
        />
         {/* Image Upload Section */}
        <label className="block text-md font-medium text-gray-800 mt-3 mb-2">Upload Image for Module Cover </label>
        <div className="border rounded p-3 flex items-center justify-between">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="imageUpload"
          />
          <label
            htmlFor="imageUpload"
            className="flex items-center cursor-pointer text-blue-600"
          >
            <FaUpload className="mr-2" /> Upload Image
          </label>
          {image && (
            <img src={image} alt="Preview" className="h-16 w-16 rounded-lg ml-3 object-cover" />
          )}
        </div>
        <label className="block text-md font-medium text-gray-800 mt-3">Description Of Module</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded mt-1 h-24"
          placeholder="Enter course description"
        ></textarea>

        <label className="block text-md font-medium text-gray-800 mt-3">Category Of Module</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded mt-1"
        >
          <option value="maths">Maths</option>
          <option value="science">Science</option>
          <option value="english">English</option>
        </select>

        <label className="block text-md font-medium text-gray-800 mt-3">Pricing Of Module</label>
        <select
          value={pricing}
          onChange={(e) => setPricing(e.target.value)}
          className="w-full p-2 border rounded mt-1"
        >
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>

        

        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded mr-2">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
