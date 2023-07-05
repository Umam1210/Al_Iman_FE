import React from 'react'

export default function CardVoucher({ voucher }) {
    const tHead = [
        { name: 'Bulan' },
        { name: 'Digunakan' },
    ]


    // console.log("vou", voucher);
    return (
        <>
            <div className='w-full h-full border border-[#00000040] pb-10'>
                <div className='pl-8 mt-7 text-[#000000BF] text-[28px]'>
                    <p>Voucher</p>
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
                                            {voucher?.voucher?.map((item, idx) => (
                                                <tr key={idx} className="text-gray-700 h-[48px]">
                                                    <td className="px-4 text-ms font-semibold border border-[#00000040]">{item?.bulan}</td>
                                                    <td className="px-4 text-ms font-semibold border border-[#00000040]">{item?.jumlahDipakai}</td>
                                                </tr>
                                            ))}
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
