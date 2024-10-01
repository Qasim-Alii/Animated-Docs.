import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-40 h-48 bg-zinc-900 rounded-[25px] text-white px-3 py-6 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-xs mt-2 font-semibold">{data.description}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex text-xs items-center justify-between py-1 px-5 mb-1">
          <p>{data.filesize}</p>
          <span className="w-4 h-4 bg-zinc-200 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoIosClose color="#000" />
            ) : (
              <MdOutlineFileDownload color="#000" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag flex w-full h-8 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } items-center justify-center`}
          >
            <p className="text-xs font-semibold">{data.tag.tagTitel}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
