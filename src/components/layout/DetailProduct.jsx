import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { getProductById } from '../../services/product';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function DetailProduct() {
    const location = useLocation()
    const id = location?.state?.id
    const product = useSelector((state) => state?.product?.selectedProduct)
    const dispatch = useDispatch()
    const userData = JSON.parse(localStorage.getItem('userData'));
    const user = userData?.[0]?.role;
    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch]);

    return (
        <>
            <div className='flex items-center justify-center'>
                <div>
                    <div className='xxl:flex xxl:justify-start xl:flex xl:justify-start md:flex md:justify-center sm:flex sm:justify-center xs:flex xs:justify-center s:flex s:justify-center'>
                        <p className='text-[32px] font-bold mt-[60px]'>
                            Detail Product
                        </p>
                    </div>
                    <div className='pt-8 pb-9 border-[#00000040] border mt-5  xxl:h-[411px] xxl:w-[906px] xl:h-[411px] xl:w-[906px] lg:h-[411px] lg:w-[906px] xxl:flex xxl:flex-row xxl:gap-5  xl:flex xl:flex-row xl:gap-5 lg:flex lg:flex-row lg:gap-5 s:w-[344px]'>
                        <div className='px-4'>
                            <div className='h-[269px] xxl:w-[382px] xl:w-[382px] w-auto'>
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
                                            className="h-[269px] xxl:w-[382px] xl:w-[382px] w-auto object-cover object-center "
                                        />
                                    ))}
                                </Carousel>
                            </div>
                            {user === 'admin' ?
                                <div className='w-full flex justify-center mt-4'>
                                    <Link to={`/admin/sunting/${product?.name}/${product?.id}`}>
                                        <button className='h-[52px] w-[292px] rounded-md border border-[#0089FF] bg-[#2D9CDB] text-[24px] text-[#FFFFFF]'>
                                            Ubah
                                        </button>
                                    </Link>
                                </div> : user === 'pembeli' ?
                                    <div className='w-full flex justify-center mt-4'>
                                        <Link to={`/pembeli/pesanan/${product?.name}/${product?.id}`}>
                                            <button className='h-[52px] w-[292px] rounded-md border border-[#0089FF] bg-[#2D9CDB] text-[24px] text-[#FFFFFF]'>
                                                Pesan
                                            </button>
                                        </Link>
                                    </div> : ''}
                        </div>
                        <div className='xxl:w-[445px] xl:w-[455px] w-auto'>
                            <p className='text-[#348FDD] px-6 text-[32px] font-normal'>{product?.name}</p>
                            <div className='xxl:w-[445px] xl:w-[455px] w-auto px-6 flex flex-col mt-6 text-[24px] border border-[#00000040]'>
                                <div className='h-[50px] border-b border-[#00000040] flex flex-row justify-between px-3 items-center'>
                                    <p className='text-[#404040B2]'>Harga</p>
                                    <p>Rp.{product?.harga}</p>
                                </div>
                                <div className='h-[50px] border-b border-[#00000040] flex flex-row justify-between px-3 items-center'>
                                    <p className='text-[#404040B2]'>Stock</p>
                                    <p>{product?.stock}</p>
                                </div>
                                <div className='h-[50px] border-b border-[#00000040] flex flex-row justify-between px-3 items-center'>
                                    <p className='text-[#404040B2]'>Pelapak</p>
                                    <p>{product?.user?.name}</p>
                                </div>
                                <div className='flex flex-col px-3 py-1'>
                                    <p className='text-[#404040B2]'>Deskripsi</p>
                                    <p className='truncate'>{product?.deskripsi}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
