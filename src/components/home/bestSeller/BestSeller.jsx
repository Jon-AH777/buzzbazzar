'use client';
import Product from '../products/Product';
import Heading from '../products/Heading';
import PrevArrow from '../newArrivals/PrevArrow';
import NextArrow from '../newArrivals/NextArrow';
import {
    bestseller1,
    bestseller2,
    bestseller3,
    bestseller4,
    bestseller5,
    bestseller6,
    bestseller7,
} from '/public/images/index.js';
import Slider from 'react-slick';

const BestSeller = () => {
    const products = [
        {
          img: bestseller1, productName: 'Sneaker', price: '44.00', color: 'Red', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          img: bestseller2, productName: 'Glasses', price: '44.00', color: 'Red', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          img: bestseller3, productName: 'Handbag', price: '44.00', color: 'Red', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          img: bestseller4, productName: 'Glasses', price: '44.00', color: 'Red', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          img: bestseller5, productName: 'Watches', price: '44.00', color: 'Red', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          img: bestseller6, productName: 'Suits', price: '44.00', color: 'Red', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          img: bestseller7, productName: 'Suits', price: '44.00', color: 'Red', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
      ];
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
      <Heading text="Best Sellers" />
      </div>
      <div className="px-4">
        <Slider {...settings}>
          {products.map((product, index) => (  
           
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
  )
}

export default BestSeller