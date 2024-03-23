import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion";

function Cards({ file, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      className="w-[200px] h-[250px] bg-stone-500 rounded-3xl relative overflow-hidden"
    >
      <div className="p-5">
        <FaRegFileAlt size={25} />
        <p className="text-sm font-medium leading-relaxed text-justify py-5">
          {file ? file.name : "No file uploaded"}
        </p>
      </div>

      {/* footer */}
      <div className="w-full h-20 absolute bottom-0">
        <div className="flex justify-between items-center px-5 mb-2">
          <p>{file ? (file.size / 1000).toFixed(2) + " KB" : ""}</p>
          <button>
            <MdDownload
              size={25}
              className="p-1 bg-sky-200 rounded-full cursor-pointer"
            />
          </button>
        </div>
        <div className="flex justify-center items-center w-full bg-green-500 p-3 cursor-pointer">
          <h1>Downloading...</h1>
        </div>
      </div>
    </motion.div>
  );
}

export default Cards;
