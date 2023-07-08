import React, { useEffect } from 'react'
import CardDetailPemesananAdmin from '../../components/admin/CardDetailPemesananAdmin'
import CardDetailProductPemesanan from '../../components/admin/CardDetailProductPemesanan'
import CardDetailPesananAdmin from '../../components/admin/CardDetailPesananAdmin'
import CardKelolaPemesanan from '../../components/admin/CardKelolaPemesanan'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../services/orders'
import { getVoucherById } from '../../services/voucher'


export default function DetailPesanan() {
    const param = useParams()
    const orderId = param?.id
    const dispatch = useDispatch()
    const order = useSelector((state) => state?.orderUser?.orderUser)
    const voucher = useSelector((state) => state?.voucher?.voucher)
    const voucherId = order?.voucherId

    useEffect(() => {
        dispatch(getOrderById(orderId))
        dispatch(getVoucherById(voucherId))
    }, [dispatch])

    return (
        <>
            <div className='xxl:pl-[98px] xl:pl-[98px] lg:pl-32 xs:px-16 s:px-10 pb-40'>
                <p className='text-[32px] font-bold mt-12'>Detail Pesanan</p>
                <div className='mt-6'>
                    <div className='flex xxl:flex-row xl:flex-row lg:flex-col md:flex-col xs:flex-col s:flex-col  gap-5'>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <CardDetailPemesananAdmin order={order} />
                            </div>
                            <div>
                                <CardDetailProductPemesanan order={order} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div>
                                <CardDetailPesananAdmin order={order} voucher={voucher} />
                            </div>
                            <div>
                                <CardKelolaPemesanan order={order} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
