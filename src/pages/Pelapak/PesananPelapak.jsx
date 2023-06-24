import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function PesananPelapak() {
    const [href, setHref] = useState(false)
    const [href1, setHref1] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/pelapak/pesanan/dikonfirmasi') {
            setHref(true)
            setHref1(false)
        } else if (location.pathname === '/pelapak/pesanan/selesai') {
            setHref(false)
            setHref1(true)
        }
        else {
            setHref(false)
        }
    }, [location])

    console.log("href", href);
    return (
        <>
            <div className='pl-[98px]'>
                <p className='text-[32px] font-bold mt-12'>Pesanan</p>
                <div className='flex flex-row pr-24 pl-4 justify-between gap-4 mt-9'>
                    <Link to={'/pelapak/pesanan/dikonfirmasi'}>
                        <button className={`w-[215px] h-[37px] rounded-md border ${href === true ? 'bg-[#2D9CDB] text-white' : 'bg-white text-[#348FDD]'} border-[#0089FF]`}>Dikonfirmasi</button>
                    </Link>
                    <Link to={'/pelapak/pesanan/selesai'}>
                        <button className={`w-[215px] h-[37px] rounded-md border ${href1 === true ? 'bg-[#2D9CDB] text-white' : 'bg-white text-[#348FDD]'} border-[#0089FF]`}>Selesai</button>
                    </Link>
                </div>
            </div>
            <div className='w-full ml-24'>
                <Outlet />
            </div>
        </>
    )
}
