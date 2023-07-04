import React, { useEffect, useState } from 'react'
import { getAllVouchersUsage, getVoucherByIdUser, } from '../../services/voucher';
import { useDispatch, useSelector } from 'react-redux';
import ModalDeleteVoucherUser from './ModalDeleteVoucherUser';

export default function CardVoucherUser({ userId }) {
    const value = 5
    const [count, setCount] = useState(1);
    const [number, setNumber] = useState(1);
    const dispatch = useDispatch();
    const searchResults = useSelector((state) => state?.voucher?.searchVoucher)
    // const voucher = useSelector((state) => state?.voucher?.voucherUser)
    const vUsage = useSelector((state) => state?.voucher?.vouchersUsage)
    const user = userId
    useEffect(() => {
        dispatch(getVoucherByIdUser(user));
        dispatch(getAllVouchersUsage())
    }, [dispatch]);

    const selectedData = (item) => {
        setCount(item)
    }
    const length = Math.ceil(vUsage?.length / value);
    let pages = [];
    for (var z = 0; z <= length; z++) {
        pages.push(z);
    }
    const btnRight = () => {
        if (number + 1 > length) {
            setNumber(length);
        } else {
            setNumber(number + 1);
        }
    };
    const btnLeft = () => {
        if (number - 1 < 1) {
            setNumber(1);
        } else {
            setNumber(number - 1);
        }
    };
    const filteredData = searchResults.length != 0 ? searchResults : vUsage;
    const tHead = [
        { name: 'Nama', span: 2 },
        { name: 'Status', span: 2 },
        { name: 'Aksi', span: 2 },
    ]

    return (
        <>
            <div className='px-16'>
                {vUsage?.length === 0 ? <div>
                    <p>Tidak ada data</p>
                </div> : <div className=''>
                    <div className='w-full h-full pt-6'>
                        <section className="container mx-auto">
                            <div className="w-full overflow-hidden ">
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-left grid grid-cols-6 h-[57px] text-[#000000BF] text-[20px] ">
                                                {tHead.map((item, idx) => (
                                                    <th key={idx} className={`col-span-${item?.span} border pl-4 border-[#00000040] flex items-center`}><p>{item?.name}</p></th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {filteredData?.slice((count - 1) * value, count * value)?.map((item, idx) => (
                                                <tr key={idx} className="grid grid-cols-6 text-gray-700 h-[48px]">
                                                    <td className="col-span-2 px-4 border border-[#00000040] flex items-center">
                                                        <p>{item?.voucher?.name}</p>
                                                    </td>
                                                    <td className="col-span-2 px-4 border border-[#00000040] flex items-center">
                                                        {item?.isUsed === true ? 'Digunakan' : 'Belum digunakan'}
                                                    </td>
                                                    {item?.isUsed === true ?
                                                        <td className="col-span-2 px-4 border border-[#00000040] flex items-center">

                                                        </td> : <td className="col-span-2 flex items-center justify-center px-4  border border-[#00000040]">
                                                            <div className='flex flex-row justify-center items-center gap-4'>
                                                                <ModalDeleteVoucherUser voucherId={item?.voucher_usages?.[0].id} />
                                                            </div>
                                                        </td>}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>
                    {filteredData.length >= 5 ? <div className='w-full flex justify-center mt-6'>
                        <nav className={`${number + 1 <= length ? 'grid grid-cols-4 w-[214px]' : 'grid grid-cols-3 w-[150px]'}  place-items-center h-[46px] border-2 border-[#348FDD40] text-[24px]`} aria-label="Pagination">
                            <div className='col-span-1 w-full h-full grid place-items-center' onClick={() => btnLeft()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </div>
                            {number <= length ? (
                                <div onClick={() => {
                                    selectedData(number)
                                }} className={`col-span-1 h-full w-full border-l-2 border-[#348FDD40] grid place-items-center ${count === number ? 'bg-[#2D9CDBAB] text-[#FFFFFF]' : ''}`}>
                                    <button>{number}</button>
                                </div>
                            ) : null}
                            {number + 1 <= length ? (
                                <div onClick={() => {
                                    selectedData(number + 1)
                                }} className={`col-span-1 h-full w-full border-l-2 border-[#348FDD40] grid place-items-center ${count === number + 1 ? 'bg-[#2D9CDBAB] text-[#FFFFFF]' : ''}`}>
                                    <button>{number + 1}</button>
                                </div>
                            ) : null}
                            <div className='col-span-1 border-l-2 border-[#348FDD40] w-full h-full grid place-items-center ' onClick={() => btnRight()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </nav>
                    </div> : ''}
                </div >}
            </div >
        </>
    )
}



