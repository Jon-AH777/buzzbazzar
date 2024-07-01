import Link from 'next/link'
import React from 'react'

const Category = () => {
    return (
        <div className='hidden lg:block container mx-auto bg-white p-2 my-2'>
            <div className='flex gap-4 xl:justify-center'>
                <div className='text-sm text-gray-700 hover:text-black group'>
                    <Link href="/">Grocery
                    </Link>
                    <ul className='relative text-sm shadow  invisible group-hover:visible '>
                        <li className='hover:bg-gray-100'>men</li>
                        <li className='relative'>men</li>
                        <li className='relative'>men</li>
                        <li className='relative'>men</li>
                        <li className='relative'>men</li>
                        <li className='relative'>men</li>
                    </ul>
                </div>
                <div className='text-sm text-gray-700 hover:text-black group'>
                    <Link href="/">Grocery
                    </Link>
                    <ul className='relative text-sm shadow  invisible group-hover:visible'>
                        <li className='relative'>men</li>
                        <li className='relative'>men</li>
                        <li className='relative'>men</li>
                        <li className='relative'>men</li>
                        <li className='relative'>men</li>
                        <li className='relative'>men</li>
                    </ul>
                </div>
                <div className='text-sm text-gray-700 hover:text-black group'>
                    <Link href="/">Grocery
                    </Link>
                    <ul className='relative text-sm shadow  invisible group-hover:visible'>
                        <li className='relative'>men</li>
                        <li className='relative'>men</li>
                        <li className='relative'>men</li>
                        <li className='relative'>men</li>
                        <li className='relative'>men</li>
                        <li className='relative'>men</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Category