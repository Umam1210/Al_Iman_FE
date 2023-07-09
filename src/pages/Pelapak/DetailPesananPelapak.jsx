import React from 'react'
import CardDetailPemesanPelapak from '../../components/pelapak/CardDetailPemesanPelapak'
import CardDetailProductPemesananPelapak from '../../components/pelapak/CardDetailProductPemesananPelapak'
import CardDetailPesananPelapak from '../../components/pelapak/CardDetailPesananPelapak'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getOrderById } from '../../services/orders'

export default function DetailPesananPelapak() {
    const param = useParams()
    const orderId = param?.id
    const dispatch = useDispatch()
    const order = useSelector((state) => state?.orderUser?.orderUser)
    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [])

    return (
        <>
            <div className='pl-[98px] pb-40'>
                <p className='text-[32px] font-bold mt-12'>Detail Pesanan</p>
                <div className='mt-6'>
                    <div className='flex flex-row gap-5'>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <CardDetailPemesanPelapak order={order} />
                            </div>
                            <div>
                                <CardDetailProductPemesananPelapak order={order} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div>
                                {/* <CardDetailPesananAdmin /> */}
                                <CardDetailPesananPelapak />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
