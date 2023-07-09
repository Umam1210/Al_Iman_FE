import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../services/product';
import { Carousel } from 'react-responsive-carousel';
import formatRupiah from '../../helper/formatRupiah';

export default function DetailProductPesanan({ param }) {
    const dispatch = useDispatch()
    const product = useSelector((state) => state.product?.selectedProduct)
    useEffect(() => {
        dispatch(getProductById(param?.id))

    }, [])

    return (
        <>
            <div className="xxl:w-[344px] xl:w-[344px] w-auto h-[555px] bg-white border border-[#8181813D]" >
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
                            {product?.images?.map((url, idx) => (
                                <img
                                    key={idx}
                                    src={url?.url}
                                    alt={product?.filename}
                                    className="h-[165px] w-[309px] xs object-cover object-center "
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center h-[64px] px-3 border-b border-[#8181813D] text-[#000000B2]'>
                    <p className='text-[20px] font-bold'>Nama</p>
                    <p className='text-[20px] font-normal'>{product?.name}</p>
                </div>
                <div className='flex flex-row justify-between items-center h-[64px] px-3 border-b border-[#8181813D] text-[#000000B2]'>
                    <p className='text-[20px] font-bold'>Harga</p>
                    <p className='text-[20px] font-normal'>{formatRupiah(product?.harga)}</p>
                </div>
                <div className='flex flex-col pt-4 items-start h-[104px] px-3 border-b border-[#8181813D] text-[#000000B2]'>
                    <p className='text-[20px] font-bold'>Deskripsi</p>
                    <p className='text-[20px] font-normal'>{product?.deskripsi}</p>
                </div>
                <div className='flex flex-row justify-between items-center h-[64px] px-3 border-b border-[#8181813D] text-[#000000B2]'>
                    <p className='text-[20px] font-bold'>Pelapak</p>
                    <p className='text-[20px] font-normal'>{product?.user?.name}</p>
                </div>

            </div>
        </>
    )
}
