import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationPembeli() {
    const navigate = [
        { name: 'Katalog', href: 'katalog' },
        { name: 'Dashboard', href: 'dashboard' },
        { name: 'Daftar Pelapak', href: 'list-pelapak' },
        { name: 'Pesanan Saya', href: 'pesanan-saya/menunggu-konfirmasi' },
        { name: 'Voucher Saya', href: 'voucher-saya' },
    ]

    return (
        <>
            <div className='w-[344px] h-auto'>
                <div className='w-full h-[73.66px] bg-[#E9E9E9] flex  items-center '>
                    <p className='text-[24px] font-normal text-[#000000B2] ml-7'>Navigasi</p>
                </div>
                <div className='flex flex-col border-x border-[#E9E9E9]'>
                    {navigate.map((item, idx) => (
                        <Link key={idx} to={`/pembeli/${item.href}`} >
                            <div className='h-[65.75px] border-b border-[#E9E9E9] flex items-center'>
                                <p className='text-[24px] font-normal text-[#000000B2] ml-7'>
                                    {item.name}
                                </p>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </>
    )
}

