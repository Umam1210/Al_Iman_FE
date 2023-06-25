import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVoucherByIdUser } from '../../services/voucher';
import CardVoucherSaya from '../../components/pembeli/CardVoucherSaya';
import { useCookies } from 'react-cookie';

export default function VoucherSaya() {
    const dispatch = useDispatch()
    const voucher = useSelector((state) => state.voucher.voucherUser)
    const [id] = useCookies(['userId']);
    const userId = id?.userId
    useEffect(() => {
        dispatch(getVoucherByIdUser(userId));
    }, [dispatch]);

    console.log("id", id?.userId);
    console.log(voucher);
    return (
        <>
            <div className='pl-[98px]'>
                <p className='text-[32px] font-bold mt-12'>Voucher Saya</p>
                <div className='mt-6'>
                    <div className='w-full'>
                        <CardVoucherSaya voucher={voucher} />
                    </div>
                </div>
            </div>
        </>
    )
}
