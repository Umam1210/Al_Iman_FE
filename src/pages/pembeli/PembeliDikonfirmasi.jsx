import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrderByIdUser } from '../../services/orders';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

export default function PembeliDikonfirmasi() {
    const dispatch = useDispatch();
    const order = useSelector((state) => state?.orders?.orderUser)
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = userData?.[1]?.access

    useEffect(() => {
        dispatch(getOrderByIdUser(userId));
    }, []);
    const tHead = [
        { name: 'Tanggal Pesan', span: 2, },
        { name: 'Waktu Ambil', span: 2, },
        { name: 'Produk', span: 2, },
        { name: 'Jumlah', span: 2, },
        { name: 'Pembeli', span: 2, },
        { name: 'Aksi', span: 2, },
    ]

    return (
        <div className=' h-[503px] xxl:w-[968px] xl:w-[968px] w-auto mt-6'>
            <div className='w-full h-auto'>
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
                                {order?.map((item, idx) => (
                                    <tbody key={idx} className="bg-white">
                                        {item?.status === 'dikonfirmasi' ?
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
                                                        <Link to={`/pembeli/detail-pesanan/${item?.id}`} state={{ id: item?.id }} >
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


        </div>
    )
}
