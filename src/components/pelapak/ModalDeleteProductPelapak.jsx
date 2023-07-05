import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../services/product';

export default function ModalDeleteProductPelapak({ productId }) {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch();

    const handleDeleteUser = () => {
        dispatch(deleteProduct(productId));
        setShowModal(false)
    };

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="grid place-items-center rounded text-[21px] text-[#DD3434] border border-[#DD3434] px-2"
            >

                <p>Hapus</p>
            </button>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className='h-[189px] w-[299px] bg-[#FFFFFF] border border-[#00000040] drop-shadow-lg rounded-lg'>
                                <form action="" method="post">
                                    <div className='flex justify-center pt-5'>
                                        <p className='text-[]  text-[16px]'>Apakah Anda Yakin untuk Menghapus?</p>
                                    </div>
                                    <div className='flex mx-6 mt-4'>
                                        <p className='text-center text-[] text-[14px]'>Data ini akan dihapus secara permanen. Anda tidak dapat membatalkan tindakan ini</p>
                                    </div>
                                    <div className='flex justify-center pt-3'>
                                        <div className='flex flex-row gap-2 items-center'>
                                            <button
                                                type='button'
                                                onClick={() => setShowModal(false)}
                                                className='py-1 px-5 text-[#FFFFFF]  text-[21px] bg-[#2D9CDB] rounded '
                                            >
                                                Batal
                                            </button>
                                            <button
                                                type='button'
                                                onClick={() => handleDeleteUser()}
                                                className='py-1 px-5 text-[#FFFFFF] text-[21px] rounded bg-[#DD3434]'
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}
