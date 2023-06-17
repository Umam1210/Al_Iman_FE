import React, { useEffect, useState } from 'react'

export default function CardProduct({ product }) {
    const [, setTersedia] = useState(0);
    const [, setDisembunyikan] = useState(0);


    useEffect(() => {

        let tersedia = 0
        let disembunyikan

        product.forEach(item => {
            if (item.visibility === true) {
                tersedia++;
            } else if (item.visibility === false) {
                disembunyikan++;
            }
        });
        setTersedia(tersedia)
        setDisembunyikan(disembunyikan)
    }, []);

    // const total = tersedia + disembunyikan
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
                        <p>Tersedia</p>
                        <p>{product?.length}</p>
                    </div>
                    <div className='flex flex-row justify-between items-center mt-6'>
                        <p>Disembunyikan</p>
                        <p>2</p>
                    </div>
                    <div className='w-full border border-[#000000] mt-5' />
                    <div className='flex flex-row justify-between items-center mt-3'>
                        <p>Total</p>
                        <p>2</p>
                    </div>
                </div>

            </div>
        </>
    )
}