import axios from "axios";
import React, { useState } from "react";
import { FaUpload } from "react-icons/fa"; // Importing Upload Icon

const CourseModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("alphabets");
  const [moduleprice, setmoduleprice] = useState("free");
  const [moduleimg, setmoduleimg] = useState(null);
  const [moduleimgcover, setmoduleimgcover] = useState(null);
  const [isUploading, setisUploading] = useState(false)
  

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || !description || !moduleimg) {
      alert("Please fill all fields and upload an moduleimg!");
      return;
    }

    axios.post(`${import.meta.env.VITE_DEV_URL}study/createmodule`,{title, description, category, teacherId:"5b48a2ef-611c-4bfe-8c14-7642e68d8b7b",moduleimg,moduleprice})
    .then(res=>{
      console.log(res.data)

    })
    // onSave({ title, description, category, moduleprice, moduleimg });
    // setTitle("");
    // setDescription("");
    // setCategory("alphabets");
    // setmoduleprice("free");
    // setmoduleimg(null);
    // onClose();
  };

  const handlemoduleimgUpload = async (e) => {
    setisUploading(true);
    e.preventDefault();
    console.log('Printed')
    const data = new FormData();
    data.append("file", moduleimgcover);
    data.append("upload_preset", "myCloud");
    data.append("cloud_name", "dcn17cw7n");
    try {
      if (moduleimgcover === null) {
        return alert("Please upload an image");
      }
      
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dcn17cw7n/image/upload",
        data
      );

      setmoduleimg(res.data.url);
      //   console.log(res.data.url);
      // Toast.success()
      // Swal.fire({
      //   title: "Image Uploaded Successfully",
      //   text: "Your image has been uploaded successfully",
      //   icon: "success",
      // })
      alert("Image Uploaded Successfully",res.data.url);
      setisUploading(false);
    } catch (error) {
      console.error("An error occurred while uploading", error);
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
         {/* moduleimg Upload Section */}
        <label className="block text-md font-medium text-gray-800 mt-3 mb-2">Upload moduleimg for Module Cover </label>
        <div className="border rounded p-3 flex items-center justify-between">
        <label className=" text-white h-12 mr-5 p-5">
                    Upload Module Cover image
                  </label>
                  <input
                    onChange={(e) => setmoduleimgcover(e.target.files[0])}
                    className=" text-white "
                    type="file"
                    name="moduleimgcover"
                    id="moduleimgcover"
                  />
                  <button
                    disabled={isUploading}
                    className="text-3xl "
                    onClick={handlemoduleimgUpload}
                  >
                    {isUploading?(<span>Uploading</span>):(<span>Upload</span>)}
                    
                  </button>
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
          value={moduleprice}
          onChange={(e) => setmoduleprice(e.target.value)}
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
