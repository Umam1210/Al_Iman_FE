import React from 'react'
import { createRef } from 'react'
import Pdf from "react-to-pdf";
import { formatDate } from '../../helper/formatDay';
import formatRupiah from '../../helper/formatRupiah';

export default function DownloadPdf({ data, voucher }) {
    const ref = createRef()
    return (
        <>
            <Pdf targetRef={ref} filename={`pesanan${data?.user?.name}.pdf`}>
                {({ toPdf }) => <button onClick={toPdf} className="w-[141px] h-[43px] px-4 py-2 bg-sky-500 rounded-md border border-sky-500 justify-center items-center gap-1 inline-flex">
                    <p className="text-center text-white text-[21px] font-normal leading-tight">Print</p>
                </button>}
            </Pdf>
            <div ref={ref} className='sr-only h-auto w-[800px]  px-20 flex flex-col text-black'>
                <div className='flex-col w-full flex items-center pt-32 gap-4 '>
                    <p className='text-[30px] font-semibold leading-10'>Al-Iman Boga</p>
                    <div className='w-full h-1 border-t-2 border-black border-opacity-20 ' />
                </div>
                <div className='w-full flex flex-col gap-2 items-start my-6'>
                    <div className='flex flex-row gap-4 w-96'>
                        <div className='flex flex-row w-44 justify-between'>
                            <p className='font-medium text-[18px]'> Nama Pemesan </p>
                            <p>:</p>
                        </div>
                        <p>{data?.user?.name}</p>
                    </div>
                    <div className='flex flex-row gap-4 w-96'>
                        <div className='flex flex-row w-44 justify-between'>
                            <p className='font-medium text-[18px]'>Alamat</p>
                            <p>:</p>
                        </div>
                        <p>{data?.user?.alamat}</p>
                    </div>
                    <div className='flex flex-row gap-4 w-96'>
                        <div className='flex flex-row w-44 justify-between'>
                            <p className='font-medium text-[18px]'>Tanggal</p>
                            <p>:</p>
                        </div>
                        <p>{formatDate(data?.tanggal_pesan)}</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-row text-[18px] font-semibold border-t border-x border-[#8181813D]'>
                        <div className='h-20 w-24 flex justify-center items-center border border-[#8181813D]'>
                            <p>No</p>
                        </div>
                        <div className='h-20 w-48 flex justify-start pl-4 items-center border border-[#8181813D]'>
                            <p>Jenis Pesanan</p>
                        </div>
                        <div className='h-20 w-24 flex justify-center items-center border border-[#8181813D]'>
                            <p>Qty.</p>
                        </div>
                        <div className='h-20 w-32 flex justify-end pr-4 items-center border border-[#8181813D]'>
                            <p>Harga @</p>
                        </div>
                        <div className='h-20 w-32 flex justify-end pr-4 items-center border border-[#8181813D]'>
                            <p>Jumlah Rp.</p>
                        </div>
                    </div>
                    <div className='flex flex-row border-x border-b border-[#8181813D]'>
                        <div className='h-20 w-24 text-[24px] leading-10 font-medium flex justify-center items-center border border-[#8181813D]'>
                            <p>1</p>
                        </div>
                        <div className='h-20 w-48 flex justify-start pl-4 items-center border border-[#8181813D]'>
                            <p>{data?.product?.name}</p>
                        </div>
                        <div className='h-20 w-24 flex justify-center items-center border border-[#8181813D]'>
                            <p>{data?.banyak}</p>
                        </div>
                        <div className='h-20 w-32 flex justify-end pr-4 items-center border border-[#8181813D]'>
                            <p>{formatRupiah(data?.product?.harga)}</p>
                        </div>
                        <div className='h-20 w-32 flex justify-end pr-4 items-center border border-[#8181813D]'>
                            <p>{formatRupiah(data?.total_harga)}</p>
                        </div>
                    </div>
                    <div className='flex flex-row border-r-2 border-[#8181813D]'>
                        <div className='h-20 w-24 flex justify-center items-center'>

                        </div>
                        <div className='h-20 w-48 flex justify-start pl-4 items-center'>

                        </div>
                        <div className='h-20 w-56 flex justify-start px-4 items-center border-b-2 border-l-2 border-[#8181813D]'>
                            <p>Total</p>
                        </div>
                        <div className='h-20 w-32 flex justify-end pr-4 items-center border-b-2 border-l-2 border-[#8181813D]'>
                            <p>{formatRupiah(data?.total_harga)}</p>
                        </div>
                    </div>
                    <div className='flex flex-row border-r-2 border-[#8181813D]'>
                        <div className='h-20 w-24 flex justify-center items-center'>

                        </div>
                        <div className='h-20 w-48 flex justify-start pl-4 items-center'>

                        </div>
                        <div className='h-20 w-56 flex justify-start px-4 items-center border-b-2 border-l-2 border-[#8181813D]'>
                            <p>Voucher</p>
                        </div>
                        <div className='h-20 w-32 flex justify-end pr-4 items-center border-b-2 border-l-2 border-[#8181813D]'>
                            {data?.usedVoucher == false ? <p>
                                Rp.0
                            </p> : <p>{formatRupiah(voucher?.jumlah)}</p>}

                        </div>
                    </div>
                    <div className='flex flex-row border-r-2 border-[#8181813D]'>
                        <div className='h-20 w-24 flex justify-center items-center'>

                        </div>
                        <div className='h-20 w-48 flex justify-start pl-4 items-center'>

                        </div>
                        <div className='h-20 w-56 flex justify-start px-4 items-center border-b-2 border-l-2 border-[#8181813D]'>
                            <p>Sisa</p>
                        </div>
                        <div className='h-20 w-32 flex justify-end pr-4 items-center border-b-2 border-l-2 border-[#8181813D]'>
                            <p>{formatRupiah(data?.total_bayar)}</p>
                        </div>
                    </div>
                </div>
                <div className=' text-black mt-20'>
                    <p>Di ambil tanggal {formatDate(data?.tanggal_ambil)}</p>
                </div>
            </div>

        </>
    )
}
