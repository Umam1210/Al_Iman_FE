import React, { useEffect, useState } from 'react'

export default function CardProduct({ product }) {
    const [tersedia, setTersedia] = useState(0);
    const [disembunyikan, setDisembunyikan] = useState(0);


    useEffect(() => {
        let tersedia = 0
        let disembunyikan = 0
        product.forEach(item => {
            if (item.visibility === false) {
                tersedia++;
            } else if (item.visibility === true) {
                disembunyikan++;
            }
        });
        setTersedia(tersedia)
        setDisembunyikan(disembunyikan)
    }, [product, setDisembunyikan, setTersedia]);

    return (
        <>
            <div className='w-full h-full border border-[#00000040]  font-normal px-8 pt-6'>
                <div className='text-[28px] text-[#000000BF]'>
                    <p>
                        Produk
                    </p>
                </div>
                <div className='flex flex-col text-[24px] text-[#181818BF] mt-9'>
                    <div className='flex flex-row justify-between items-center '>
                        <p>Tersedia</p>
                        <p>{tersedia}</p>
                    </div>
                    <div className='flex flex-row justify-between items-center mt-6'>
                        <p>Disembunyikan</p>
                        <p>{disembunyikan}</p>
                    </div>
                    <div className='w-full border border-[#000000] mt-5' />
                    <div className='flex flex-row justify-between items-center mt-3'>
                        <p>Total</p>
                        <p>{product?.length}</p>
                    </div>
                </div>

            </div>
        </>
    )
}