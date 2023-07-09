import React from 'react'
import formatRupiah from '../../helper/formatRupiah'

export default function CardVoucherSaya({ voucher }) {
    const tHead = [
        { name: 'Nama' },
        { name: 'Jumlah' },
    ]

    return (
        <div className='w-full h-full border border-[#00000040] pb-5'>
            <div className='pl-8 mt-7 text-[#000000BF] text-[28px]'>
                <p>Voucher</p>
            </div>
            <div className='w-full h-full px-9 pt-6'>
                <section className="container mx-auto">
                    <div className="w-full overflow-hidden ">
                        <div className="w-full overflow-auto">
                            <table className=" xxl:w-full xl:w-full lg:w-[800px] md:w-[800px] xs:w-[800px] s:w-[800px]">
                                <thead>
                                    <tr className="text-left h-[57px] text-[#000000BF] text-[20px] ">
                                        {tHead.map((item, idx) => (
                                            <th key={idx} className="border pl-4 border-[#00000040]">{item?.name}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {voucher?.map((item, idx) => (
                                        <>
                                            {item?.isUsed === false ? <tr key={idx} className="text-gray-700 h-[48px]">
                                                <td className="px-4 text-ms font-semibold border border-[#00000040]">{item?.voucher?.name}</td>
                                                <td className="px-4 text-ms font-semibold border border-[#00000040]">{formatRupiah(item?.voucher?.jumlah)}</td>
                                            </tr> : ''}

                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
