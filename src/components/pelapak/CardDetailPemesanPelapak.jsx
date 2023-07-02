import React from 'react'

export default function CardDetailPemesanPelapak({ order }) {


    return (
        <>
            <div className="w-[344px] bg-white border border-[#8181813D]" >
                <div className="w-full flex items-center pl-7 h-[76.33px] text-[24px] font-normal bg-[#E9E9E9] text-[#000000B2]">
                    <p>Detail Pemesan</p>
                </div>
                <div className='flex flex-row justify-between items-center h-[64px] px-3 border-b border-[#8181813D] text-[#000000B2]'>
                    <p className='text-[20px] font-bold'>Nama</p>
                    <p className='text-[20px] font-normal'>{order?.user?.name}</p>
                </div>
                <div className='flex flex-row justify-between items-center h-[64px] px-3 border-b border-[#8181813D] text-[#000000B2]'>
                    <p className='text-[20px] font-bold'>kontak</p>
                    <p className='text-[20px] font-normal'>{order?.user?.kontak}</p>
                </div>
                <div className='flex flex-col pt-4 items-start h-[104px] px-3 text-[#000000B2]'>
                    <p className='text-[20px] font-bold'>Alamat</p>
                    <p className='text-[20px] font-normal'>{order?.user?.alamat}</p>
                </div>
            </div>
        </>
    )
}


