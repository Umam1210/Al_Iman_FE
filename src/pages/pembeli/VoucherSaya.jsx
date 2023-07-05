import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVouchersUsageByUserId } from '../../services/voucher';
import CardVoucherSaya from '../../components/pembeli/CardVoucherSaya';

export default function VoucherSaya() {
    const dispatch = useDispatch()
    const voucherUser = useSelector((state) => state?.orderUser?.voucherUserList)
    const Access = JSON.parse(localStorage.getItem('userData'))
    const userId = Access?.[1].access
    useEffect(() => {
        dispatch(getAllVouchersUsageByUserId(userId));
    }, [dispatch]);

    return (
        <>
            <div className='pl-[98px]'>
                <p className='text-[32px] font-bold mt-12'>Voucher Saya</p>
                <div className='mt-6'>
                    <div className='w-full'>
                        <CardVoucherSaya voucher={voucherUser} />
                    </div>
                </div>
            </div>
        </>
    )
}
