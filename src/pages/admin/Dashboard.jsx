import React, { useEffect } from 'react'
import CardPengguna from '../../components/admin/CardPengguna'
import CardProduct from '../../components/admin/CardProduct'
import CardRingkasan from '../../components/admin/CardRingkasan'
import CardVoucher from '../../components/admin/CardVoucher'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../services/user'
import { getAllProducts } from '../../services/product'
import { countVoucherUsagePerMonth } from '../../services/voucher'

export default function Dashboard() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state?.user?.users)
    const product = useSelector((state) => state?.product?.products)
    const voucher = useSelector((state) => state?.orderUser?.voucherUsagePerMounth)
    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getAllProducts());
        dispatch(countVoucherUsagePerMonth())
    }, [dispatch]);

    return (
        <>
            <div className='xxl:pl-[98px] xl:pl-[98px] lg:pl-32 xs:px-16 s:px-10 '>
                <p className='text-[32px] font-bold mt-12'>Dashboard</p>
                <div className='flex xxl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col s:flex-col gap-8 mt-11 '>
                    <div className='h-[284px] w-full'>
                        <CardPengguna user={user} />
                    </div>
                    <div className='h-[284px] w-full '>
                        <CardProduct product={product} />
                    </div>
                </div>
                <div className='mt-14'>
                    <div className='min-h-[436px]  w-full'>
                        <CardRingkasan />
                    </div>
                </div>
                <div className='mt-4'>
                    <div className='min-h-[436px]  w-full'>
                        <CardVoucher voucher={voucher} />
                    </div>
                </div>
            </div>

        </>
    )
}
