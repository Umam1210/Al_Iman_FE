import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMonthlySales } from '../../services/voucher'
import formatRupiah from '../../helper/formatRupiah'

export default function CardRingkasan() {
    const dispatch = useDispatch()
    const sales = useSelector((state) => state?.orders?.sales)
    useEffect(() => {
        dispatch(getMonthlySales())
    }, [])

    const tHead = [
        { name: 'Bulan' },
        { name: 'Jumlah Terjual' },
        { name: 'Nominal' },
    ]

    const totalSales = sales?.sales?.reduce((total, item) => total + item.penghasilan, 0);

    return (
        <>
            <div className='w-full h-full border border-[#00000040] pb-10 '>
                <div className='pl-8 mt-7 text-[#000000BF] text-[28px]'>
                    <p>Ringkasan</p>
                </div>
                <div className=''>
                    <div className='w-full h-full px-9 pt-6'>
                        <section className="container mx-auto">
                            <div className="w-full overflow-hidden ">
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-left h-[57px] text-[#000000BF] text-[20px] ">
                                                {tHead.map((item, idx) => (
                                                    <th key={idx} className="border pl-4 border-[#00000040]">{item?.name}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {sales?.sales?.map((item, idx) => (
                                                <tr key={idx} className="text-gray-700 h-[48px]">
                                                    <td className="px-4 text-ms font-semibold border border-[#00000040]">{item?.bulan}</td>
                                                    <td className="px-4 text-ms font-semibold border border-[#00000040]">{item?.jumlahPesanan}</td>
                                                    <td className="px-4 text-sm border border-[#00000040]">{formatRupiah(item?.penghasilan)}</td>
                                                </tr>
                                            ))}
                                            <tr className="text-gray-700 h-[48px]">
                                                <td className="px-4 text-ms font-semibold border border-[#00000040]">total</td>
                                                <td className="px-4 text-ms font-semibold border border-[#00000040]"></td>
                                                <td className="px-4 text-sm border border-[#00000040]">{formatRupiah(totalSales)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
