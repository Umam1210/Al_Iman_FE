import React from 'react'
import DaftarPelapak from '../../components/pembeli/DaftarPelapak'

export default function Pelapak() {
    return (
        <>
            <div className='xxl:pl-[98px] xl:pl-[98px] lg:pl-32 xs:px-16 s:px-10'>
                <p className='text-[32px] font-bold mt-12'>List Pelapak</p>
                <div className='mt-4'>
                    <div className=' w-full '>
                        <DaftarPelapak />
                    </div>
                </div>
            </div>
        </>
    )
}
