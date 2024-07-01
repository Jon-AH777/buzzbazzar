"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Paginate = ({ hasNextPage,
    hasPrevPage, }) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '5'


    return (
        <>
            <div className="mt-12 flex justify-between w-full">
                <button
                    className='bg-blue-500 text-white p-1 cursor-pointer'
                    disabled={!hasPrevPage}
                    onClick={() => {
                        router.push(`/shop/?page=${Number(page) - 1}&per_page=${per_page}`)
                    }}>
                    Prev
                </button>

                <div>
                    {page} / {Math.ceil(10 / Number(per_page))}
                </div>

                <button
                    className='bg-blue-500 text-white p-1 cursor-pointer'
                    disabled={!hasNextPage}
                    onClick={() => {
                        router.push(`/shop/?page=${Number(page) + 1}&per_page=${per_page}`)
                    }}>
                    Next
                </button>
            </div>


        </>
    )
}

export default Paginate