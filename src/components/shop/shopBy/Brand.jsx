'use client';
import { useState } from "react";
import NavTitle from "./NavTitle";
import {useStore} from "@/zustand/slice";
const Brand = () => {
  const brands = [
    {
      _id: 900,
      title: "Gucci",
    },
    {
      _id: 901,
      title: "Prada",
    },
    {
      _id: 902,
      title: "Goldstar",
    },

    {
      _id: 903,
      title: "Zara",
    },
  ]

  const [showBrands, setShowBrands] = useState(true);
  const { checkedBrands, toggleBrand } = useStore((state) => ({
    checkedBrands: state.checkedBrands,
    toggleBrand: state.toggleBrand,
  }))
  
  return (
    <div>
      <div className="cursor-pointer" onClick={() => setShowBrands(!showBrands)}>
        <NavTitle title="Shop by Brand" icons={true} />
      </div>
      <div>
        {showBrands && (
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {brands.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id={item._id}
                  checked={checkedBrands.some((b) => b._id === item._id)}
                  onChange={() => toggleBrand(item)} // Call the Zustand action
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

export default Brand