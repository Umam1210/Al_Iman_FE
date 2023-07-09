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

    // console.log("href", href);
    return (
        <>
            <div className='xxl:pl-[98px] xl:pl-[98px] lg:pl-32 xs:px-10 s:px-10'>
                <p className='text-[32px] font-bold mt-12'>Pesanan</p>
                <div className='flex xxl:flex-row xl:flex-row lg:flex-row md:flex-col xs:flex-col s:flex-col  xxl:pr-24 xl:pr-24 pl-4 justify-between gap-4 mt-9'>
                    <Link to={'/pelapak/pesanan/dikonfirmasi'}>
                        <button className={`xxl:w-[215px] xl:w-[215px] lg:w-[215px] w-full h-[37px] rounded-md border ${href === true ? 'bg-[#2D9CDB] text-white' : 'bg-white text-[#348FDD]'} border-[#0089FF]`}>Dikonfirmasi</button>
                    </Link>
                    <Link to={'/pelapak/pesanan/selesai'}>
                        <button className={`xxl:w-[215px] xl:w-[215px] lg:w-[215px] w-full h-[37px] rounded-md border ${href1 === true ? 'bg-[#2D9CDB] text-white' : 'bg-white text-[#348FDD]'} border-[#0089FF]`}>Selesai</button>
                    </Link>
                </div>
            </div>
            <div className='w-full xxl:ml-24 xl:ml-24 px-6'>
                <Outlet />
            </div>
        </>
    )
}
