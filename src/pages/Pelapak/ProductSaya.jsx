import React from 'react'
import { Link } from 'react-router-dom'
import DaftarProductPelapak from '../../components/pelapak/DaftarProductPelapak'

export default function ProductSaya() {
    return (
        <>
            <div className='xxl:pl-[98px] xl:pl-[98px] lg:pl-32 xs:px-16 s:px-10'>
                <p className='text-[32px] font-bold mt-12'>Produk Saya</p>
                <Link to={'/pelapak/tambah-produk'}>
                    <button className='h-[47px] w-[211px] bg-[#2D9CDB] border border-[#0089FF] rounded-md text-[21px] text-[#FFFFFF] font-normal mt-7'>
                        Tambah Produk
                    </button>
                </Link>
                <div className='mt-6'>
                    <div className='h-[478px] w-full'>
                        <DaftarProductPelapak />
                    </div>
                </div>
            </div>
        </>
    )
}
