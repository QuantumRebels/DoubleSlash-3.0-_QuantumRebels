import { useState } from "react";
import { FaUpload } from "react-icons/fa";

const SignupForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 rounded-xl dark:bg-slate-900">
      <div className="bg-white dark:bg-slate-950 p-6 rounded-lg shadow-lg w-96">
        <p className="text-3xl dark:text-blue-500 font-bold text-center mb-4">
          Create Your Account
        </p>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Email"
          />
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Password"
          />
          <label className="flex items-center space-x-3 cursor-pointer border border-gray-300 rounded-md px-4 py-2 bg-white hover:bg-gray-100 transition">
            <FaUpload className="text-blue-500" />
            <span className="text-gray-700 dark:text-gray-800">
              {selectedFile ? selectedFile.name : "Upload Profile Picture"}
            </span>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>

          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Sign Up
          </button>
        </form>
        <a href="/profile/register">
          <p className="text-center mt-4 text-md dark:text-blue-500">
            Already have an account?{" "}
            <span className="text-blue-500 cursor-pointer">Sign in</span>
          </p>
        </a>
        <div className="flex flex-col space-y-3 mt-6">
          <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition">
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 48 48"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
