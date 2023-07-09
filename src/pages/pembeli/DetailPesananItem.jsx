import React from 'react'
import CardDetailPemesanan from '../../components/pembeli/CardDetailPemesanan'
import CardDetailPemesan from '../../components/pembeli/CardDetailPemesan'
import CardDetailPesanan from '../../components/pembeli/CardDetailPesanan'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getOrderById } from '../../services/orders'
import { getUserById } from '../../services/user'
import { getVoucherById } from '../../services/voucher'

export default function DetailPesananItem() {
    const params = useParams()
    const param = params?.id
    const dispatch = useDispatch()
    const order = useSelector((state) => state?.orderUser?.orderUser)
    const user = useSelector((state) => state?.user?.user)
    const voucher = useSelector((state) => state?.voucher?.voucher)
    const userId = order?.product?.pelapakId
    const voucherId = order?.voucherId

    useEffect(() => {
        dispatch(getOrderById(param))
        dispatch(getUserById(userId))
        dispatch(getVoucherById(voucherId))
    }, [dispatch, getOrderById, getUserById, getVoucherById])

    return (
        <div className='xxl:pl-[98px] xl:pl-[98px] lg:pl-32 xs:px-16 s:px-10 pb-40'>
            <p className='text-[32px] font-bold mt-12'>Detail Pesanan</p>
            <div className='mt-6'>
                <div className='flex xxl:flex-row xl:flex-row lg:flex-col md:flex-col xs:flex-col s:flex-col  gap-5'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <CardDetailPemesan order={order} />
                        </div>
                        <div>
                            <CardDetailPemesanan order={order} name={user} />
                        </div>
                    </div>
                    <div>
                        <CardDetailPesanan order={order} voucher={voucher} />
                    </div>
                </div>
            </div>
        </div>
    )
}
