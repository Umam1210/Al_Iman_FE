import React from 'react'
import { Outlet, Link } from 'react-router-dom';

export default function Pesanan() {


    return (
        <>
            <div className='pl-[98px]'>
                <p className='text-[32px] font-bold mt-12'>Pesanan</p>
                <div className='flex flex-row pr-24 pl-4 justify-between gap-4 mt-9'>
                    <Link to={'/admin/pesanan/menunggu-konfirmasi'}>
                        <button className='w-[215px] h-[37px] rounded-md border border-[#0089FF]'>Menunggu Konfirmasi</button>
                    </Link>
                    <Link to={'/admin/pesanan/dikonfirmasi'}>
                        <button className='w-[215px] h-[37px] rounded-md border border-[#0089FF]'>Dikonfirmasi</button>
                    </Link>
                    <Link to={'/admin/pesanan/selesai'}>
                        <button className='w-[215px] h-[37px] rounded-md border border-[#0089FF]'>Selesai</button>
                    </Link>
                    <Link to={'/admin/pesanan/dibatalkan'}>
                        <button className='w-[215px] h-[37px] rounded-md border border-[#0089FF]'>Dibatalkan</button>
                    </Link>
                </div>
            </div>
            <div className='w-full ml-24'>
                <Outlet />
            </div>
        </>
    )
}
