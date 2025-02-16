import axios from "axios";
import React, { useEffect, useState } from "react";


const CourseModule = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [signImgUrl, setsignImgUrl] = useState("");
  const [signimg, setsignimg] = useState("")
  const [moduleId, setmoduleId] = useState("alphabets");
  const [modules, setmodules] = useState([])
  const [isUploading, setisUploading] = useState(false)

  const fetchmodules=async()=>{
    await axios.get(`${import.meta.env.VITE_DEV_URL}study/getmodules`)
    .then(res=>{
      console.log(res.data.data)
      setmodules(res.data.data)
    })
  }

  useEffect(()=>{
    fetchmodules()
  },[])
  const handleSubmit = (e) => {
    setisUploading(true)
    e.preventDefault()
    if (!title || !signImgUrl) {
      alert("Please fill all fields!");
      return;
    }
    axios.post(`${import.meta.env.VITE_DEV_URL}study/createlesson`,{title,signImgUrl,moduleId})
    .then(res=>{
      console.log(res.data)
      setisUploading(false)
      onSave();
      onClose();
    
    })
    
  };

  const handlemoduleimgUpload = async (e) => {
    setisUploading(true);
    e.preventDefault();
    console.log('Printed')
    const data = new FormData();
    data.append("file", signimg);
    data.append("upload_preset", "myCloud");
    data.append("cloud_name", "dcn17cw7n");
    try {
      if (signimg === null) {
        return alert("Please upload an image");
      }
      
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dcn17cw7n/image/upload",
        data
      );

      setsignImgUrl(res.data.url);
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
        <h2 className="text-2xl   font-bold mb-4">Add New Lesson</h2>

        <label className="block text-md font-medium text-gray-800">Lesson Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mt-1"
          placeholder="Enter module title"
        />

<label className="block text-md font-medium text-gray-800 mt-3 mb-2">Upload moduleimg for Module Cover </label>
        <div className="border rounded p-3 flex items-center justify-between">
        <label className=" text-white h-12 mr-5 p-5">
                    Upload Module Cover image
                  </label>
                  <input
                    onChange={(e) => setsignimg(e.target.files[0])}
                    className=" text-white "
                    type="file"
                    name="signimg"
                    id="signimg"
                  />
                  <button
                    disabled={isUploading}
                    className="text-3xl "
                    onClick={handlemoduleimgUpload}
                  >
                    {isUploading?(<span>Uploading</span>):(<span>Upload</span>)}
                    
                  </button>
        </div>

        <label className="block text-md font-medium text-gray-800 mt-3">Select Module</label>
        <select
          value={moduleId}
          onChange={(e) => setmoduleId(e.target.value)}
          className="w-full p-2 border rounded mt-1"
        >
          {
            modules &&
            modules.map((mod, index) => (
              <option key={index} value={mod.id}>{mod.title}</option>
            ))
          }
          
         
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
