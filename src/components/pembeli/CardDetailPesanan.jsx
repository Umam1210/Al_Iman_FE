import React from 'react'
import { formatDate, formatTime } from '../../helper/formatDay'
import formatRupiah from '../../helper/formatRupiah'
import DownloadPdf from '../pdf/DownloadPdf'

export default function CardDetailPesanan({ order, voucher }) {

    return (
        <div className='xxl:w-[655px] xl:w-[655px] w-auto border border-[#8181813D] text-[#000000B2]'>
            <div className='h-[74px] flex items-center justify-between px-[51px] bg-[#E9E9E9]'>
                <p className='text-[24px] font-normal text-[#000000B2]'>Detail Pesanan</p>
                <DownloadPdf data={order} voucher={voucher} />
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
                        <p className='text-[24px] font-normal'>{voucher?.name}</p> :
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
