import React from 'react'
import { Link } from 'react-router-dom'

export default function TambahPengguna() {
    return (
        <>
            <div className='px-[98px] '>
                <p className='text-[32px] font-bold mt-12'>Tambah Pengguna</p>
                <div className='mt-8'>
                    <form action="" method="post">

                        <div className='h-[1205px] w-[892px] border border-[#E9E9E9]'>
                            <div className='h-[84.55px] w-full bg-[#E9E9E9] text-[24px] font-normal flex items-center pl-[70px] text-[#000000B2]'>
                                <p>Data Pengguna</p>
                            </div>
                            <div className='pl-[70px] mt-6 flex flex-col gap-9 text-[24px]'>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Nama</p>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Email</p>
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>No. KK</p>
                                    <input
                                        type="number"
                                        name=""
                                        id=""
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Role</p>
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Kontak</p>
                                    <input
                                        type="number"
                                        name=""
                                        id=""
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Alamat</p>
                                    <textarea
                                        rows={4}
                                        name=""
                                        id=""
                                        className='h-[127px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Kata Sandi</p>
                                    <input
                                        type="password"
                                        name=""
                                        id=""
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                            </div>
                            <div className='w-full flex justify-end gap-[30px] pr-[70px] mt-10 text-[21px]'>
                                <Link to={'/admin/list-pengguna'}>
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
