import React from 'react'
import formatRupiah from '../../helper/formatRupiah'
import { Carousel } from 'react-responsive-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOrderById } from '../../services/orders'
import { getUserById } from '../../services/user'

export default function CardDetailPemesanan() {
    const params = useParams()
    const param = params?.id
    const dispatch = useDispatch()
    const order = useSelector((state) => state?.orderUser?.orderUser)
    const userId = order?.product?.pelapakId
    const pelapak = useSelector((state) => state?.user?.user)

    useEffect(() => {
        dispatch(getOrderById(param))
        dispatch(getUserById(userId))
    }, [])

    useEffect(() => {

    }, [])

    // console.log("orderss", pelapak);
    // console.log("orderss", userId);
    return (
        <>
            <div className="w-[344px] h-[555px] bg-white border border-[#8181813D]" >
                <div className="w-full flex items-center pl-7 h-[76.33px] text-[24px] font-normal bg-[#E9E9E9] text-[#000000B2]">
                    <p>Detail Produk</p>
                </div>
                <div className='flex justify-center w-full py-2 border-b border-[#8181813D]'>
                    <div className='h-[165px] w-[309px]'>
                        <Carousel
                            autoPlay={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            showStatus={false}
                            interval={2000}>
                            {order?.product?.images?.map((url, idx) => (
                                <img
                                    key={idx}
                                    src={url?.url}
                                    alt={order?.product?.filename}
                                    className="h-[165px] w-[309px] xs object-cover object-center "
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center h-[64px] px-3 border-b border-[#8181813D] text-[#000000B2]'>
                    <p className='text-[20px] font-bold'>Nama</p>
                    <p className='text-[20px] font-normal'>{order?.product?.name}</p>
                </div>
                <div className='flex flex-row justify-between items-center h-[64px] px-3 border-b border-[#8181813D] text-[#000000B2]'>
                    <p className='text-[20px] font-bold'>Harga</p>
                    <p className='text-[20px] font-normal'>{formatRupiah(order?.product?.harga)}</p>
                </div>
                <div className='flex flex-col pt-4 items-start h-[104px] px-3 border-b border-[#8181813D] text-[#000000B2]'>
                    <p className='text-[20px] font-bold'>Deskripsi</p>
                    <p className='text-[20px] font-normal'>{order?.product?.deskripsi}</p>
                </div>
                <div className='flex flex-row justify-between items-center h-[64px] px-3 border-b border-[#8181813D] text-[#000000B2]'>
                    <p className='text-[20px] font-bold'>Pelapak</p>
                    <p className='text-[20px] font-normal'>{pelapak?.name}</p>
                </div>

            </div>
        </>
    )
}
