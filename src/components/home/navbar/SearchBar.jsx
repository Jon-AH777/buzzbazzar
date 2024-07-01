'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";


const SearchBar = () => {
  return (
    <form className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1">
        <input type="text" name="name" placeholder="search" className="flex-1 bg-transparent outline-none" />
        <button>
            <Image src="/search.png" alt="" width={16} height={16} className="cursor-pointer"/>
        </button>
    </form>
  )
}

export default SearchBar