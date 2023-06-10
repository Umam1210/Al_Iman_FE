import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function HomePage({ products }) {
    const location = useLocation()
    const [user, setUser] = useState('guest')

    useEffect(() => {
        if (location.pathname.substring(1, 6) === 'admin') {
            setUser('admin')
        } else if (location.pathname.substring(1, 8) === 'pembeli') {
            setUser('pembeli')
        }
    }, [])

    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 sm:px-6 pt-11 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-x-1 gap-y-10 sm:grid-cols-2 sm:gap-x-20 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                        {products.map((product) => (
                            <div key={product.id} className="group relative bg-[#FFFFFF] drop-shadow-xl rounded-[21px] w-[306.86px] h-[429.93px]">
                                <div className="w-full overflow-hidden">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-[207.8px] w-[306.86px] rounded-t-[21px] object-contain object-center "
                                    />
                                </div>
                                <div className="mt-4 px-3">
                                    <div className="text-[28px] font-bold">
                                        <span aria-hidden="true" className="" />
                                        {product.name}
                                    </div>
                                    <div className='text-[20px]'>
                                        <div className='text-[#727272]'>
                                            <p>Lapak {product.color}</p>
                                        </div>
                                        <div className='flex flex-row justify-between'>
                                            <p>Stock</p>
                                            <p>{product.id}</p>
                                        </div>
                                        <div className='flex flex-row justify-between'>
                                            <p>Harga</p>
                                            <p>Rp.{product.id}</p>
                                        </div>
                                        {user === 'guest' ?
                                            <Link to={`/detail/${product.color}`}>
                                                <button className='text-[#2D9CDB] border border-[#2D9CDB] rounded px-4 py-1 mt-3' >
                                                    Lihat
                                                </button>
                                            </Link> :
                                            user === 'admin' ?
                                                <div className='flex justify-between'>
                                                    <Link to={`/admin/detail/${product.color}`}>
                                                        <button className='text-[#2D9CDB] border border-[#2D9CDB] rounded px-4 py-1 mt-3' >
                                                            Lihat
                                                        </button>
                                                    </Link>
                                                    <Link to={`/admin/sunting/${product.color}/${product.id}`}>
                                                        <button className='text-[#FFFFFF] border border-[#2D9CDB] rounded bg-[#2D9CDB] w-[136px] py-1 mt-3' >
                                                            Sunting
                                                        </button>
                                                    </Link>
                                                </div> :
                                                user === 'pembeli' ?
                                                    <div className='flex justify-between'>
                                                        <Link to={`/pembeli/detail/${product.color}`}>
                                                            <button className='text-[#2D9CDB] border border-[#2D9CDB] rounded px-4 py-1 mt-3' >
                                                                Lihat
                                                            </button>
                                                        </Link>
                                                        <Link to={`/pembeli/pesanan/${product.color}/${product.id}`}>
                                                            <button className='text-[#FFFFFF] border border-[#2D9CDB] rounded bg-[#2D9CDB] w-[136px] py-1 mt-3' >
                                                                Pesan
                                                            </button>
                                                        </Link>
                                                    </div> : ''
                                        }

                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}