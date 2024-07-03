'use client';

import useStore from '@/zustand/slice';
import NavTitle from './NavTitle';
import { useState } from 'react';
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
  const [showCategorys, setShowCategorys] = useState(true);
  const checkedCategorys = useStore((state) => state.checkedCategorys);
  const toggleCategory = useStore((state) => state.toggleCategory);

  return (
    <div>
      <div
        className="cursor-pointer" onClick={() => setShowCategorys(!showCategorys)}
      >
        <NavTitle title="Shop by Category" icons={true} />
      </div>
      <div>
        {showCategorys && (
          <ul className='flex flex-col gap-4 text-sm lg:text-base text-[#767676]'>
            {category.map((item) => (
              <li key={item._id} className='border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 cursor-pointer'>
                <input
                  type="checkbox"
                  id={item._id}
                  checked={checkedCategorys.some((c) => c._id === item._id)}
                  onChange={() => toggleCategory(item)}
                />
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Category