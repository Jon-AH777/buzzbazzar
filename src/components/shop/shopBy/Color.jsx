'use client';

import { useState } from 'react';
import NavTitle from './NavTitle';
import {useStore} from '@/zustand/slice';
const Color = () => {
  const colors = [
    {
      _id: 9001,
      title: "Green",
      base: "#22c55e",
    },
    {
      _id: 9002,
      title: "Gray",
      base: "#a3a3a3",
    },
    {
      _id: 9003,
      title: "Red",
      base: "#dc2626",
    },
    {
      _id: 9004,
      title: "Yellow",
      base: "#f59e0b",
    },
    {
      _id: 9005,
      title: "Blue",
      base: "#3b82f6",
    },
  ];

  const [showColors, setShowColors] = useState(true);
const { checkedColors, toggleColor } = useStore((state) =>({
  checkedColors: state.checkedColors,
  toggleColor: state.toggleColor,
}))

  return (
    <div>
      <div className='cursor-pointer' onClick={() => setShowColors(!showColors)}>
        <NavTitle title="Shop by Color" icons={true} />
      </div>
      <div>
        {showColors && (
          <ul className='flex flex-col gap-4 text-sm lg:text-base text-[#767676]'>
            {colors.map((item) => (
              <li key={item._id} className='border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 cursor-pointer'>
                <input
                  key={item._id}
                  type='checkbox'
                  checked={checkedColors.some((c) => c._id === item._id)}
                  onChange={() => toggleColor(item)}
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

export default Color