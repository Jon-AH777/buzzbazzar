'use client';
import { useState, useEffect } from 'react';
import React from 'react'
import ProductInfo from '@/components/shop/productDetails/page'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const tabs = [
    {
        id: "Description",
        label: "Description",
        disc: "Lorem ipsum "
    },
];

const SinglePage = ({ img, imgSrc }) => {
    const location = useRouter();
    const [productInfo, setProductInfo] = useState([]);
    
    return (
        <>
            <div className='w-full mx-auto border-b-[1px] border-b-gray-300 mt-10'>

                <div className="max-w-container mx-auto px-4">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
                        <div className="h-full xl:col-span-2">
                            <Image
                                className="w-full h-full "
                                src={img}
                                alt={imgSrc}
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="h-full w-full md:col-span-2 xl:col-span-4 xl:px-4 flex flex-col gap-6 justify-center">
                            <ProductInfo productInfo={productInfo} />
                        </div>
                    </div>
                    <div>
                        <div className=" space-x-4  pt-4">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className="bg-blue-500 text-white p-2"
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        <div className="my-4">
                            {tabs.map((tab) => (
                                <div
                                    key={tab.id}
                                    
                                >
                                    <p className="text-base text-gray-600">
                                        {tab.disc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePage