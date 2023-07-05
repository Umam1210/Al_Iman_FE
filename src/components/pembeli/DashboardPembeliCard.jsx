import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllOrders, getOrderByIdUser } from '../../services/orders';
import { formatDate, formatTime } from '../../helper/formatDay';

export default function DashboardPembeliCard() {
    const value = 6;
    const [count, setCount] = useState(1);
    const [number, setNumber] = useState(1);
    const dispatch = useDispatch();

    const User = useSelector((state) => state?.user?.users)
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = userData?.[1]?.access

    const order = useSelector((state) => state?.orders?.orderUser)


    const selectedData = (item) => {
        setCount(item)
    }

    useEffect(() => {
        dispatch(getOrderByIdUser(userId));
        dispatch(getAllOrders())
    }, [dispatch]);

    const tHead = [
        { name: 'Nama Produk', span: 1 },
        { name: 'Waktu Ambil', span: 2 },
        { name: 'Status', span: 1 },
        { name: 'Aksi', span: 1 },
    ]

    const length = Math.ceil(User?.length / value);
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
    const filteredData = order;

    return (
        <>
            <div className='w-full h-full '>
                <p className='text-2xl font-normal'>Pesanan dalam proses</p>
                {order?.length === 0 ? <div>
                    <p>Tidak ada data</p>
                </div> : <div className=''>
                    <div className='w-full h-full pt-6'>
                        <section className="container mx-auto">
                            <div className="w-full overflow-hidden ">
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="grid grid-cols-5 text-left h-[57px] text-[#000000BF] text-[20px] ">
                                                {tHead.map((item, idx) => (
                                                    <th key={idx} className={`col-span-${item?.span} border pl-4 border-[#00000040] flex items-center`}>
                                                        <p>{item?.name}</p>
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {filteredData?.slice((count - 1) * value, count * value)?.map((item, idx) => (
                                                <tr key={idx} className="grid grid-cols-5 text-gray-700 h-[48px]">
                                                    <td className="col-span-1 px-4 border border-[#00000040] flex items-center">
                                                        <p>{item?.product?.name}</p>
                                                    </td>
                                                    <td className="col-span-2 px-4 border border-[#00000040] flex items-center">
                                                        <p>{formatDate(item?.tanggal_ambil)} pukul {formatTime(item?.jam_ambil)}</p>
                                                    </td>
                                                    <td className="col-span-1 px-4 border border-[#00000040] flex items-center">
                                                        <p>{item?.status}</p>
                                                    </td>
                                                    <td className="col-span-1 flex items-center justify-center px-4  border border-[#00000040]">
                                                        <div className='flex flex-row justify-center items-center gap-4'>
                                                            <Link to={`/pembeli/detail-pesanan/${item?.id}`} state={{ id: item?.id }} >
                                                                <button
                                                                    className="grid place-items-center rounded text-[21px] text-[#2D9CDB] border border-[#2D9CDB] px-3"
                                                                >

                                                                    <p>Detail</p>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>
                    {filteredData?.length > 5 ? <div className='w-full flex justify-center mt-6'>
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

