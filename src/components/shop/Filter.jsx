import React from 'react'

const Filter = ({ handleSort, sortOption }) => {
  return (
    <div className=''>
        <div className='flex justify-end items-end rounded-sm'>
        <select id="sort" className='bg-black text-white px-2 py-1 rounded-sm' onChange={(e) => handleSort(e.target.value)} value={sortOption}>
          <option value="Default">Default</option>
          <option value="Low-to-High">Low to High</option>
          <option value="High-to-Low">High to Low</option>
        </select>
      </div>
    </div>
  )
}

export default Filter