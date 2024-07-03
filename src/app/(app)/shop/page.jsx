'use client';

import { useState } from 'react'
import React from 'react'
import ShopSideNav from '@/components/shop/ShopSideNav'
import Pagination from '@/components/shop/Pagination'
import { paginationItems } from '@/Constants'
import Filter from '@/components/shop/Filter'


const Page = () => {
  const [currentItems, setCurrentItems] = useState(paginationItems);
  const [ sortOption, setSortOption ] = useState("Default");
  const handleSort = (option) => {
    setSortOption(option)
    let sortedItems;

    switch (option) {
      case "Low-to-High":
        sortedItems = [...currentItems].sort((a, b) => a.price - b.price);
        break;
      case "High-to-Low":
        sortedItems = [...currentItems].sort((a, b) => b.price - a.price);
        break;
      default:
        sortedItems = paginationItems;
    }
    setCurrentItems(sortedItems);
  }

  return (
    <div className='max-w-container mt-4 mx-auto px-4'>
        <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <Filter handleSort={handleSort} sortOption={sortOption} />
          <Pagination currentItems={currentItems}  /> 
        </div>
      </div>
    </div>
  )
}

export default Page