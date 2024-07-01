import React from 'react'

import NavTitle from './NavTitle';
const Category = () => {
    const category = [
        {
          _id: 900,
          title: "Men",
        },
        {
          _id: 901,
          title: "Women",
        },
        {
          _id: 902,
          title: "Kids",
        },
    
      ];

  return (
    <div>
        <div
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Category" icons={true} />
      </div>
      <div>
        <ul className='flex flex-col gap-4 text-sm lg:text-base text-[#767676]'>
            {category.map((item) => (
                <li key={item._id} className='border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 cursor-pointer'>
                    {item.title}
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Category