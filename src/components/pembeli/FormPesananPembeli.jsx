import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Fragment } from 'react'
import formatRupiah from '../../helper/formatRupiah'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import { useEffect } from 'react'
import { getAllVouchersUsage, getVoucherByIdUser } from '../../services/voucher'
import { addOrder } from '../../services/orders'
import { useNavigate } from 'react-router-dom'
import { getProductById } from '../../services/product'

const listVoucher = []
export default function FormPesananPembeli({ productId }) {
    const dispatch = useDispatch()
    const [voucher, setVoucher] = useState(listVoucher?.[0])
    const Voucher = useSelector((state) => state?.voucher?.voucherUser)
    const vUsage = useSelector((state) => state?.voucher?.vouchersUsage)
    const product = useSelector((state) => state?.product)
    const [id] = useCookies(['userId']);
    const userId = id?.userId
    const navigate = useNavigate()
    const [form, setForm] = useState({
        userId: '',
        productId: '',
        banyak: '',
        status: '',
        tanggal_ambil: '',
        jam_ambil: '',
        voucherUsageId: '',
        catatan: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const order = {
            userId: userId,
            productId: productId,
            banyak: form.banyak,
            status: 'menunggu konfirmasi',
            tanggal_ambil: form.tanggal_ambil,
            jam_ambil: form.jam_ambil,
            voucherUsageId: voucher?.id,
            catatan: form.catatan
        };

        try {
            const response = await dispatch(addOrder(order));
            if (response?.payload?.message == 'Order berhasil dibuat') {
                setForm({
                    userId: '',
                    productId: '',
                    banyak: '',
                    status: '',
                    tanggal_ambil: '',
                    jam_ambil: '',
                    voucherUsageId: '',
                    catatan: ''
                });
                navigate('/pembeli/dashboard');
            } else {
                // console.log("Gagal :", response?.payload?.error);
            }
        } catch (error) {
            // console.log('General Error:', error);
        }
    };


    useEffect(() => {
        dispatch(getVoucherByIdUser(userId));
        getProductById(productId)
        dispatch(getAllVouchersUsage())
    }, [dispatch]);

    useEffect(() => {
        if (vUsage.length > 0) {
            const updatedListVoucher = vUsage.map((item) => {
                const voucherUsage = {
                    id: item.id,
                    voucherId: item.voucherId,
                    userId: item.userId,
                    isUsed: item.isUsed,
                    usedAt: item.usedAt,
                    createdAt: item.createdAt,
                    updatedAt: item.updatedAt,
                    voucher: item.voucher
                };

                return {
                    name: item.voucher.name,
                    id: item.id,
                    jumlah: item.voucher.jumlah,
                    isUsed: item.isUsed,
                    voucherUsage: voucherUsage
                };
            }).filter((item) => item.isUsed === false);

            const listWithEmptyData = [
                {
                    name: '',
                    id: '',
                    jumlah: 0,
                    isUsed: false,
                    voucherUsage: null
                },
                ...updatedListVoucher
            ];

            setVoucher(listWithEmptyData[0]);
            setListVoucher(listWithEmptyData);
        }
    }, [Voucher]);



    const setListVoucher = (vouchers) => {
        listVoucher.splice(0, listVoucher.length, ...vouchers);
    };

    const total = form?.banyak * product?.selectedProduct?.harga - voucher?.jumlah

    // const dataFiltered = vUsage?.filter((item) => item.isUsed === false);

    console.log("Vou", product?.selectedProduct?.harga);
    console.log("foucher", total);
    console.log("foucher", voucher?.jumlah);
    return (
        <>
            <div className='w-[655px] pb-6 border border-[#8181813D]'>
                <div className='h-[84px] flex items-center pl-[51px] bg-[#E9E9E9]'>
                    <p className='text-[24px] font-normal text-[#000000B2]'>Data Pesanan</p>
                </div>
                <form action="" onSubmit={handleSubmit} method="post">
                    <div className='h-auto'>
                        <div className='px-[50px] mt-6 flex flex-col gap-12 text-[24px]'>
                            <div className='flex flex-col gap-3 '>
                                <p>jumlah</p>
                                <input
                                    type="number"
                                    name="banyak"
                                    id="banyak"
                                    className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                    value={form?.banyak}
                                    onChange={handleChange}
                                    required
                                />
                                <p className='text-[16px] font-normal italic -mt-3'>total harga : {total <= 0 ? 0 : formatRupiah(total)}</p>

                            </div>
                            <div className='flex flex-col gap-3 '>
                                <p>Gunakan Voucher</p>
                                <Listbox value={voucher} onChange={setVoucher}>
                                    <div className="relative mt-1">
                                        <Listbox.Button className="relative w-full h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md text-left pl-4">
                                            <span className="block truncate ">{voucher?.name}</span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Listbox.Button>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute mt-1 w-full bg-[#E8F0FD] rounded-md border border-[#00000040]">
                                                {listVoucher.map((value, personIdx) => (
                                                    <Listbox.Option
                                                        key={personIdx}
                                                        className={({ active }) =>
                                                            `relative rounded-md cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-[#FFFFFF] text-[#54a7f0]' : 'text-[#000000]'
                                                            }`
                                                        }
                                                        value={value}
                                                    >
                                                        {({ selected }) => (
                                                            <>
                                                                <div className='flex flex-row items-center justify-between'>
                                                                    <p
                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                            }`}
                                                                    >
                                                                        {value?.name}
                                                                    </p>
                                                                    {value?.jumlah > 0 ? <p>
                                                                        {formatRupiah(value?.jumlah)}
                                                                    </p> : ''}

                                                                </div>
                                                                {selected ? (
                                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                    </span>
                                                                ) : null}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </Listbox>
                            </div>
                            <div className='flex flex-col gap-3 '>
                                <p>Tanggal Ambil</p>
                                <input
                                    type="date"
                                    name="tanggal_ambil"
                                    id="tanggal_ambil"
                                    value={form?.tanggal_ambil}
                                    onChange={handleChange}
                                    className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                    required
                                />
                            </div>
                            <div className='flex flex-col gap-3 '>
                                <p>Jam Ambil</p>
                                <input
                                    type="time"
                                    name="jam_ambil"
                                    id="jam_ambil"
                                    value={form?.jam_ambil}
                                    onChange={handleChange}
                                    className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                    required
                                />
                            </div>
                            <div className='flex flex-col gap-3 '>
                                <p>Catatan</p>
                                <textarea
                                    rows={4}
                                    name="catatan"
                                    id="catatan"
                                    value={form?.catatan}
                                    onChange={handleChange}
                                    className='h-[127px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md p-2'

                                />
                            </div>
                            <div className='flex flex-col gap-3 '>


                            </div>

                            <div className='w-full flex justify-end gap-[30px]  text-[21px]'>
                                <button type='submit' className='h-[47px] w-[211px] border border-[#0089FF] bg-[#2D9CDB] rounded-md text-[#FFFFFF]'>Pesan</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
