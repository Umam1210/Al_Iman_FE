import React, { useEffect, useState } from 'react'

export default function CardPengguna({ user }) {

    const [countPembeli, setCountPembeli] = useState(0);
    const [countPenjual, setCountPenjual] = useState(0);
    const [countAdmin, setCountAdmin] = useState(0);

    useEffect(() => {
        let pembeliCount = 0;
        let penjualCount = 0;
        let adminCount = 0;

        user.forEach(item => {
            if (item.role === 'pembeli') {
                pembeliCount++;
            } else if (item.role === 'pelapak') {
                penjualCount++;
            } else if (item.role === 'admin') {
                adminCount++;
            }
        });

        setCountPembeli(pembeliCount);
        setCountPenjual(penjualCount);
        setCountAdmin(adminCount);
    }, [user, setCountAdmin, setCountPembeli, setCountAdmin]);

    const total = countAdmin + countPembeli + countPenjual


    return (
        <>
            <div className='w-full h-full border border-[#00000040]  font-normal px-8 pt-6'>
                <div className='text-[28px] text-[#000000BF]'>
                    <p>
                        Pengguna
                    </p>
                </div>
                <div className='flex flex-col text-[24px] text-[#181818BF] mt-9'>
                    <div className='flex flex-row justify-between items-center '>
                        <p>Admin</p>
                        <p>{countAdmin}</p>
                    </div>
                    <div className='flex flex-row justify-between items-center '>
                        <p>Penjual</p>
                        <p>{countPenjual}</p>
                    </div>
                    <div className='flex flex-row justify-between items-center '>
                        <p>Pembeli</p>
                        <p>{countPembeli}</p>
                    </div>
                    <div className='w-full border border-[#000000] mt-2' />
                    <div className='flex flex-row justify-between items-center mt-3'>
                        <p>Total</p>
                        <p>{total}</p>
                    </div>
                </div>

            </div>
        </>
    )
}
