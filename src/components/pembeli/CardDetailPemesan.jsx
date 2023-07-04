import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUserById } from '../../services/user';


export default function CardDetailPemesan() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = userData?.[1]?.access
    const dispatch = useDispatch()
    const user = useSelector((state) => state?.user?.user)

    useEffect(() => {
        dispatch(getUserById(userId))
    }, [])

    return (
        <>
            <div className="w-[344px] bg-white border border-[#8181813D]" >
                <div className="w-full flex items-center pl-7 h-[76.33px] text-[24px] font-normal bg-[#E9E9E9] text-[#000000B2]">
                    <p>Detail Pemesan</p>
                </div>
                <div className='flex flex-row justify-between items-center h-[64px] px-3 border-b border-[#8181813D] text-[#000000B2]'>
                    <p className='text-[20px] font-bold'>Nama</p>
                    <p className='text-[20px] font-normal'>{user?.name}</p>
                </div>
                <div className='flex flex-row justify-between items-center h-[64px] px-3 border-b border-[#8181813D] text-[#000000B2]'>
                    <p className='text-[20px] font-bold'>kontak</p>
                    <p className='text-[20px] font-normal'>{user?.kontak}</p>
                </div>
                <div className='flex flex-col pt-4 items-start h-[104px] px-3 text-[#000000B2]'>
                    <p className='text-[20px] font-bold'>Alamat</p>
                    <p className='text-[20px] font-normal'>{user?.alamat}</p>
                </div>
            </div>
        </>
    )
}

