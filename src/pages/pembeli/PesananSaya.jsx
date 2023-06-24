import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function PesananSaya() {
    const [href, setHref] = useState(false)
    const [href1, setHref1] = useState(false)
    const [href2, setHref2] = useState(false)
    const [href3, setHref3] = useState(false)
    const location = useLocation()
    useEffect(() => {
        if (location.pathname === '/pembeli/pesanan-saya/menunggu-konfirmasi') {
            setHref(true)
            setHref1(false)
            setHref2(false)
            setHref3(false)
        } else if (location.pathname === '/pembeli/pesanan-saya/dikonfirmasi') {
            setHref(false)
            setHref1(true)
            setHref2(false)
            setHref3(false)
        } else if (location.pathname === '/pembeli/pesanan-saya/selesai') {
            setHref(false)
            setHref1(false)
            setHref2(true)
            setHref3(false)
        } else if (location.pathname === '/pembeli/pesanan-saya/dibatalkan') {
            setHref(false)
            setHref1(false)
            setHref2(false)
            setHref3(true)
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
                    <Link to={'/pembeli/pesanan-saya/menunggu-konfirmasi'}>
                        <button className={`w-[215px] h-[37px] rounded-md border ${href === true ? 'bg-[#2D9CDB] text-white' : 'bg-white text-[#348FDD]'} border-[#0089FF]`}>Menunggu Konfirmasi</button>
                    </Link>
                    <Link to={'/pembeli/pesanan-saya/dikonfirmasi'}>
                        <button className={`w-[215px] h-[37px] rounded-md border ${href1 === true ? 'bg-[#2D9CDB] text-white' : 'bg-white text-[#348FDD]'} border-[#0089FF]`}>Dikonfirmasi</button>
                    </Link>
                    <Link to={'/pembeli/pesanan-saya/selesai'}>
                        <button className={`w-[215px] h-[37px] rounded-md border ${href2 === true ? 'bg-[#2D9CDB] text-white' : 'bg-white text-[#348FDD]'} border-[#0089FF]`}>Selesai</button>
                    </Link>
                    <Link to={'/pembeli/pesanan-saya/dibatalkan'}>
                        <button className={`w-[215px] h-[37px] rounded-md border ${href3 === true ? 'bg-[#2D9CDB] text-white' : 'bg-white text-[#348FDD]'} border-[#0089FF]`}>Dibatalkan</button>
                    </Link>
                </div>
            </div>
            <div className='w-full ml-24'>
                <Outlet />
            </div>
        </>
    )
}
