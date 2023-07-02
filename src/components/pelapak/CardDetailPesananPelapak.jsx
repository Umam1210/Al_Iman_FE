import React, { createRef } from 'react'
import { formatDate, formatTime } from '../../helper/formatDay'
import formatRupiah from '../../helper/formatRupiah'
import { getOrderById } from '../../services/orders'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Pdf from "react-to-pdf";

export default function CardDetailPesananPelapak() {
    const ref = createRef()
    const dispatch = useDispatch()
    const order = useSelector((state) => state?.orderUser?.orderUser)
    const param = useParams()
    const orderId = param?.id
    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [])

    return (
        <>

            <div ref={ref} className='sr-only h-[595px] w-[842px] flex flex-col  items-center bg-red-200'>
                <div className='flex-col w-full flex items-center pt-32 gap-4'>
                    <p className='text-[30px] font-semibold leading-10'>Al-Iman Boga</p>
                    <div className='w-[600px] h-1 border-t-2 border-black border-opacity-20 ' />
                </div>
                <div className='w-full flex flex-col gap-2 px-10 items-start mt-4'>
                    <div className='flex flex-row w-96'>
                        <div className='flex flex-row w-44 justify-between'>
                            <p className='font-medium text-[18px]'> Nama Pemesan </p>
                            <p>:</p>
                        </div>
                        <p></p>
                    </div>
                    <div className='flex flex-row w-96'>
                        <div className='flex flex-row w-44 justify-between'>
                            <p className='font-medium text-[18px]'>Alamat</p>
                            <p>:</p>
                        </div>
                        <p></p>
                    </div>
                    <div className='flex flex-row w-96'>
                        <div className='flex flex-row w-44 justify-between'>
                            <p className='font-medium text-[18px]'>Tanggal</p>
                            <p>:</p>
                        </div>
                        <p></p>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className='w-[655px] border border-[#8181813D] text-[#000000B2]'>

                <div className='h-[74px] flex items-center justify-between px-[51px] bg-[#E9E9E9]'>
                    <p className='text-[24px] font-normal text-[#000000B2]'>Detail Pesanan</p>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className="w-[141px] h-[43px] px-4 py-2 bg-sky-500 rounded-md border border-sky-500 justify-center items-center gap-1 inline-flex">
                            <p className="text-center text-white text-[21px] font-normal leading-tight">Print</p>
                        </button>}
                    </Pdf>
                </div>
                <div className='h-auto'>
                    <div className='h-[60px] border-b border-[#8181813D] flex flex-row justify-between items-center px-6'>
                        <p className='text-[24px] font-bold'>Status</p>
                        <p className='text-[24px] font-normal'>{order?.status}</p>
                    </div>
                    <div className='h-[60px] border-b border-[#8181813D] flex flex-row justify-between items-center px-6'>
                        <p className='text-[24px] font-bold'>Jumlah</p>
                        <p className='text-[24px] font-normal'>{order?.banyak}</p>
                    </div>
                    <div className='h-[60px] border-b border-[#8181813D] flex flex-row justify-between items-center px-6'>
                        <p className='text-[24px] font-bold'>Total Harga</p>
                        <p className='text-[24px] font-normal'>{formatRupiah(order?.total_harga)}</p>
                    </div>
                    <div className='h-[60px] border-b border-[#8181813D] flex flex-row justify-between items-center px-6'>
                        <p className='text-[24px] font-bold'>Bayar</p>
                        <p className='text-[24px] font-normal'>{formatRupiah(order?.total_bayar)}</p>
                    </div>
                    <div className='h-[60px] border-b border-[#8181813D] flex flex-row justify-between items-center px-6'>
                        <p className='text-[24px] font-bold'>Diambil</p>
                        <p className='text-[24px] font-normal'>{formatDate(order?.tanggal_ambil)} pukul {formatTime(order?.jam_ambil)}</p>
                    </div>
                    <div className='h-[60px] border-b border-[#8181813D] flex flex-row justify-between items-center px-6'>
                        <p className='text-[24px] font-bold'>Voucher</p>
                        {order?.usedVoucher === true ?
                            <p className='text-[24px] font-normal'>{order?.voucher?.name}</p> :
                            <p className='text-[24px] font-normal'>Pesanan Ini Tidak Memakai Voucher</p>}
                    </div>
                    <div className='h-[140px] border-b border-[#8181813D] flex flex-col justify-start px-6'>
                        <p className='text-[24px] font-bold'>Catatan</p>
                        {order?.catatan === '' ?
                            <p className='text-[24px] font-normal'>Tidak ada catatan</p> :
                            <p className='text-[24px] font-normal'>{order?.catatan}</p>}

                    </div>

                </div>
            </div>

        </>
    )
}