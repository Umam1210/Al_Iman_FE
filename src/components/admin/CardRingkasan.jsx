import React from 'react'

export default function CardRingkasan() {
    const tHead = [
        { name: 'Bulan' },
        { name: 'Jumlah Terjual' },
        { name: 'Nominal' },
    ]
    return (
        <>
            <div className='w-full h-full border border-[#00000040] p'>
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
                                            <tr className="text-gray-700 h-[48px]">
                                                <td className="px-4 text-ms font-semibold border border-[#00000040]">22</td>
                                                <td className="px-4 text-ms font-semibold border border-[#00000040]">22</td>
                                                <td className="px-4 text-sm border border-[#00000040]">6/4/2000</td>
                                            </tr>
                                            <tr className="text-gray-700 h-[48px]">
                                                <td className="px-4 text-md font-semibold border border-[#00000040]">27</td>
                                                <td className="px-4 text-md font-semibold border border-[#00000040]">27</td>
                                                <td className="px-4 text-sm border border-[#00000040]">6/10/2020</td>
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
