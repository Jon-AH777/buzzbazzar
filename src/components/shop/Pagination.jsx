'use client';

import useStore from "@/zustand/slice";
import Product from "../home/products/Product";
import { makeSelectedBrands, makeSelectedCategories, makeSelectedColors } from "@/zustand/selectors";
import { useState } from "react";

const Pagination = ({ currentItems }) => {
  const selectedBrands = useStore(makeSelectedBrands);
  const selectedCategories = useStore(makeSelectedCategories);
  const selectedColors = useStore(makeSelectedColors);
  
  const filterItems = (item) => {
    const isBrandSelected = selectedBrands.length === 0 || selectedBrands.some((brand) => brand.title === item.brand);
    const isCategorySelected = selectedCategories.length === 0 || selectedCategories.some((category) => category.title === item.cat);
    const isColorSelected = selectedColors.length === 0 || selectedColors.some((color) => color.title === item.color);
    return isBrandSelected && isCategorySelected && isColorSelected;
  };
  
  const filteredItems = currentItems.filter(filterItems);
  

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const startIndex = (currentPage - 1) * itemsPerPage; 
  const endIndex = startIndex + itemsPerPage;
  
  const entries = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10'>
        {entries.map((item) => (
          <div key={item._id} className="w-full">
            <Product
              _id={item._id}
              img={item.img}
              productName={item.productName}
              price={item.price}
              color={item.color}
              des={item.des}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between w-full">    
          <button onClick={handlePrevPage} className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === 1 ? 'hidden' : ''}`}>
            Prev
          </button>
          <button onClick={handleNextPage} className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${endIndex >= currentItems.length ? 'hidden' : ''}`}>Next</button>    
      </div>

    </>
  )
}

export default Pagination