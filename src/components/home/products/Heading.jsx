import React from "react";

const Heading = ({ text }) => {
  return (
    <div className="w-[200px] mb-2 p-2 h-[35px] text-black text-xl font-semibol cursor-pointer">
      {text}
    </div>
  );
};

export default Heading;