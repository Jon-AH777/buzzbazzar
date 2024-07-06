import React from 'react'
import useStore from "@/zustand/slice";

const ProductInfo = ({ productInfo }) => {

    const addToCart = useStore((state) => state.addToCart);
    const handleAddToCart = () => {
        addToCart({
          _id: productInfo.id,
              name: productInfo.productName,
              quantity: 1,
              image: productInfo.img,
              price: productInfo.price,
              colors: productInfo.color,
        });
    }
   

  return (
    <div className='flex flex-col mt-4 gap-5'>
        <h2>{productInfo.productName}</h2>
        <p className="text-2xl font-semibold">
            {productInfo.price}
            <span className="text-xs ml-2 inline-flex items-center px-3 py-1 rounded-full bg-green-600 text-white">save 100</span>
        </p>
        <hr />

        <p className="text-base text-green-600 font-medium">En Stock</p>
      <p className="font-medium text-lg">
      <span className="font-normal">Colors:</span> {productInfo.color}
      </p>
      <button 
        onClick={handleAddToCart}
        className="w-full py-4 bg-blue-500 hover:bg-blue-600 duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div>
  )
}

export default ProductInfo