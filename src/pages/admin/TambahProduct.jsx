
import React from 'react'
import { Link } from 'react-router-dom'

export default function TambahProduct() {

    return (
        <>
            <div className='px-[98px] '>
                <p className='text-[32px] font-bold mt-12'>Tambah Produk</p>
                <div className='mt-8'>
                    <form action="" method="post">
                        <div className='h-auto w-[892px] pb-5 border border-[#E9E9E9]'>
                            <div className='h-[84.55px] w-full bg-[#E9E9E9] text-[24px] font-normal flex items-center pl-[70px] text-[#000000B2]'>
                                <p>Data Produk</p>
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
                                    <p>Harga</p>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Stock</p>
                                    <input
                                        type="number"
                                        name=""
                                        id=""
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Deskripsi</p>
                                    <textarea
                                        rows={4}
                                        name=""
                                        id=""
                                        className='h-[127px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md p-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Pilih Pelapak</p>
                                    {/* <input
                                        type="password"
                                        name=""
                                        id=""
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    /> */}

                                </div>
                                <div className="flex flex-col gap-3 pr-[70px]">
                                    <p>Upload Gambar</p>
                                    <label htmlFor="uploadInput" className="cursor-pointer h-[47px] w-[211px]">
                                        <div className="h-[47px] w-[211px] outline-none border border-[#000000] bg-[#C2C2C2] rounded-md px-2 text-[20px] flex items-center justify-center">
                                            <p>Pilih File</p>
                                            <input
                                                type="file"
                                                id="uploadInput"
                                                className="hidden"
                                                // onChange={handleFileUpload}
                                                required
                                            />
                                        </div>
                                        <button type='button' className='text-[#DD3434] text-[18px] ml-4'>
                                            Hapus
                                        </button>
                                    </label>
                                </div>
                                <div className='w-full flex justify-end pr-[70px] text-[21px]'>
                                    <button type='button' className='h-[47px] w-[211px] text-[#1D8B2F] border border-[#1D8B2F] rounded-md'>
                                        Tambah Gambar
                                    </button>
                                </div>
                            </div>
                            <div className='w-full flex justify-end gap-[30px] pr-[70px] mt-10 text-[21px]'>
                                <Link to={'/admin/products'}>
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
