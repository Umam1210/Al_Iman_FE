import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addVoucher } from '../../services/voucher';
import { useDispatch } from 'react-redux';

export default function TambahVoucher() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        jumlah: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const voucher = {
            name: formData.name,
            jumlah: formData.jumlah,
        };

        try {
            await dispatch(addVoucher(voucher));
            setFormData({
                name: '',
                jumlah: '',
            });
            navigate('/admin/voucher');
        } catch (error) {
            // console.log('General Error:', error);
        }
    };


    return (
        <>
            <div className='px-[98px] '>
                <p className='text-[32px] font-bold mt-12'>Tambah Voucher</p>
                <div className='mt-8'>
                    <form action="" onSubmit={handleSubmit} method="post">
                        <div className='h-auto w-[892px] pb-5 border border-[#E9E9E9]'>
                            <div className='h-[84.55px] w-full bg-[#E9E9E9] text-[24px] font-normal flex items-center pl-[70px] text-[#000000B2]'>
                                <p>Data Voucher</p>
                            </div>
                            <div className='pl-[70px] mt-6 flex flex-col gap-9 text-[24px]'>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Nama</p>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Jumlah</p>
                                    <input
                                        type="number"
                                        name="jumlah"
                                        id="jumlah"
                                        value={formData.jumlah}
                                        onChange={handleChange}
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                    <p className='-mt-3 text-[18px] text-[#707070] ml-3'>Isi nominal voucher</p>
                                </div>
                            </div>
                            <div className='w-full flex justify-end gap-[30px] pr-[70px] mt-10 text-[21px]'>
                                <Link to={'/admin/voucher'}>
                                    <button type='button' className='h-[47px] w-[211px] border border-[#0089FF] rounded-md text-[#2D9CDB]'>Kembali</button>
                                </Link>
                                <button type='submit' className='h-[47px] w-[211px] border border-[#0089FF] bg-[#2D9CDB] rounded-md text-[#FFFFFF]'>Simpan</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
