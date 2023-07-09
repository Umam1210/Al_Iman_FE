import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getOrderByIdPelapak } from '../../services/orders';
import { getAllProducts } from '../../services/product';
import { useDispatch, useSelector } from 'react-redux';

export default function PelapakSelesai() {
    const value = 5
    const [count, setCount] = useState(1);
    const [number, setNumber] = useState(1);
    const dispatch = useDispatch();
    const userData = JSON.parse(localStorage.getItem('userData'));
    const pelapakId = userData?.[1]?.access;
    const order = useSelector((state) => state.orders.orderUser)
    const selectedData = (item) => {
        setCount(item)
    }
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    const length = Math.ceil(order?.length / value);
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
    // const filteredData = searchResults.length != 0 ? searchResults : order;
    const dataFiltered = order?.filter((item) => item.status === 'selesai');
    const tHead = [
        { name: 'Tanggal Pesan', span: 2, },
        { name: 'Waktu Ambil', span: 2, },
        { name: 'Produk', span: 2, },
        { name: 'Jumlah', span: 2, },
        { name: 'Pembeli', span: 2, },
        { name: 'Aksi', span: 2, },
    ]
    useEffect(() => {
        dispatch(getOrderByIdPelapak(pelapakId))
    }, [])

    return (
        <div className=' h-[503px] xxl:w-[968px] xl:w-[968px] w-auto mt-6'>
            <div className='w-full h-full'>
                <section className="container mx-auto">
                    <div className="w-full overflow-hidden ">
                        <div className="w-full overflow-auto">
                            <table className=" xxl:w-full xl:w-full lg:w-[930px] md:w-[930px] xs:w-[930px] s:w-[930px]">
                                <thead>
                                    <tr className="text-left grid grid-cols-12 h-[57px] text-[#000000BF] text-[20px] ">
                                        {tHead.map((item, idx) => (
                                            <th key={idx} className={`col-span-${item?.span} border pl-4 border-[#00000040] flex items-center`}><p>{item?.name}</p></th>
                                        ))}
                                    </tr>
                                </thead>
                                {dataFiltered?.slice((count - 1) * value, count * value).map((item, idx) => (
                                    <tbody key={idx} className="bg-white">
                                        {item?.status === 'selesai' ?
                                            <tr className="grid grid-cols-12 text-gray-700">
                                                <td className="col-span-2 px-4 border border-[#00000040] flex items-center">
                                                    <p>{dayjs(item?.tanggal_pesan).format('DD-MM-YYYY')}</p>
                                                </td>
                                                <td className="col-span-2 px-4 border border-[#00000040] flex flex-col items-start">
                                                    <p>{item?.tanggal_ambil}</p>
                                                    <p>{item?.jam_ambil}</p>
                                                </td>
                                                <td className="col-span-2 px-4 border border-[#00000040] flex items-center">
                                                    <p>{item?.product?.name}</p>
                                                </td>
                                                <td className="col-span-2 px-4 border border-[#00000040] flex items-center">
                                                    <p>{item?.banyak}</p>
                                                </td>
                                                <td className="col-span-2 px-4 border border-[#00000040] flex items-center">
                                                    <p>{item?.user?.name}</p>
                                                </td>
                                                <td className="col-span-2 flex items-center justify-center px-4  border border-[#00000040]">
                                                    <div className='flex flex-row justify-center items-center gap-4'>
                                                        <Link to={`/pelapak/detail-pesanan/${item?.id}`} >
                                                            <button
                                                                className="grid place-items-center rounded text-[21px] text-[#2D9CDB] border border-[#2D9CDB] px-3"
                                                            >

                                                                <p>Detail</p>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr> : ''}

                                    </tbody>
                                ))}
                            </table>
                        </div>
                    </div>
                </section>
            </div>
            {dataFiltered?.length > 5 ? <div className='w-full flex justify-center mt-6'>
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

        </div>
    )
}
