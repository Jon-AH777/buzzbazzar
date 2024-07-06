import React from "react";
import Image from "next/image";

const ImageDetail = ({ imgSrc, className }) => {
  return <Image className={className} src={imgSrc} alt={imgSrc} priority/>;
};

export default ImageDetail;