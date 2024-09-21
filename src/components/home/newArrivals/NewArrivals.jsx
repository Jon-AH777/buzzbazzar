"use client";

import { products } from "@data";
import Heading from "../products/Heading";
import Product from "../products/Product";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import {
  newarr1,
  newarr2,
  newarr3,
  newarr4,
  newarr5,
  newarr6,
} from "/public/images/index.js";
import Slider from "react-slick";

const NewArrivals = () => {
  const newArrivals = products.filter((product) => product.isArrival);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full pb-4 bg-white relative overflow-hidden">
      <div className="ml-2.5">
        <Heading text="New Arrivals" />
      </div>
      <div className="px-4">
        <Slider {...settings}>
          {newArrivals.map((product, index) => (
            <Product
              key={index}
              _id={`10${index + 1}`}
              img={product.img}
              productName={product.productName}
              price={product.price}
              color={product.color}
              des={product.des}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewArrivals;
