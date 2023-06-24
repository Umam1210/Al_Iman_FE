import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVouchers } from '../../services/voucher';
import CardVoucherSaya from '../../components/pembeli/CardVoucherSaya';

export default function VoucherSaya() {
    const dispatch = useDispatch()
    const voucher = useSelector((state) => state.voucher.vouchers)
    useEffect(() => {
        dispatch(getAllVouchers());
    }, [dispatch]);
    return (
        <>
            <div className='pl-[98px]'>
                <p className='text-[32px] font-bold mt-12'>Voucher Saya</p>
                <div className='mt-6'>
                    <div className=' w-full'>
                        <CardVoucherSaya voucher={voucher} />
                    </div>
                </div>
            </div>
        </>
    )
}
