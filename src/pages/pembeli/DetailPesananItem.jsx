import React from 'react'
import CardDetailPemesanan from '../../components/pembeli/CardDetailPemesanan'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getOrderById } from '../../services/orders'
import CardDetailPemesan from '../../components/pembeli/CardDetailPemesan'
import CardDetailPesanan from '../../components/pembeli/CardDetailPesanan'

export default function DetailPesananItem() {
    const params = useParams()
    const param = params?.id
    const dispatch = useDispatch()
    const order = useSelector((state) => state?.orders?.order?.productId)
    useEffect(() => {
        dispatch(getOrderById(param))
    }, [])

    console.log(order);

    return (
        <div className='pl-[98px]'>
            <p className='text-[32px] font-bold mt-12'>Detail Pesanan</p>
            <div className='mt-6'>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <CardDetailPemesan />
                        </div>
                        <div>
                            <CardDetailPemesanan param={order} />
                        </div>
                    </div>
                    <div>
                        <CardDetailPesanan />
                    </div>
                </div>
            </div>
        </div>
    )
}
