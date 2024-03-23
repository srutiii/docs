import React, { useRef, useState } from "react";
import Background from "./components/Background";
import Cards from "./components/Cards";
import { GoFileSubmodule } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const ref = useRef();
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setUploadedFiles([...uploadedFiles, ...files]);
    console.log("success");
    toast.success("Uploaded successfully.", {
      position: "top-center",
      autoClose: 1000,
    });
  };

  const handleDelete = (index) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedFiles);
  };

  return (
    <div ref={ref} className="w-full min-h-screen bg-stone-900 flex flex-col">
      <div className="p-5 tracking-wider w-full justify-between items-center flex z-20">
        <h1 className="text-xl font-semibold text-yellow-200 justify-center items-center flex">
          My Documents
        </h1>
        <div className="flex justify-center items-center bg-pink-700 text-white px-4 py-2 rounded-lg">
          <GoFileSubmodule />
          <label htmlFor="upload" className="ml-auto cursor-pointer px-2">
            Upload File
          </label>
          <input
            type="file"
            id="upload"
            className="hidden"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileChange}
            multiple
          />
        </div>
      </div>
      <Background />

      <div className="w-full h-fit absolute grid grid-cols-5 gap-10 mt-20 px-10">
        {uploadedFiles.map((file, index) => (
          <Cards
            key={index}
            file={file}
            reference={ref}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
