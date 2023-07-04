import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrderById } from '../../services/orders'
import formatRupiah from '../../helper/formatRupiah'
import { formatDate, formatTime } from '../../helper/formatDay'

export default function CardDetailPesanan() {
    const dispatch = useDispatch()
    // const order = useSelector((state) => state?.orders?.order)
    const order = useSelector((state) => state?.orderUser?.orderUser)
    const param = useParams()
    const orderId = param?.id
    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [])

    // console.log("params", order);
    return (
        <div className='w-[655px] border border-[#8181813D] text-[#000000B2]'>
            <div className='h-[74px] flex items-center pl-[51px] bg-[#E9E9E9]'>
                <p className='text-[24px] font-normal text-[#000000B2]'>Detail Pesanan</p>
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
    )
}
