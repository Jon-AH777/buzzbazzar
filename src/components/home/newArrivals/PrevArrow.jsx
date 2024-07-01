import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center absolute top-[35%] z-10 left-2"
      onClick={onClick}
    >
      <span>
        <FaLongArrowAltLeft />
      </span>
    </div>
  );
};

export default PrevArrow;