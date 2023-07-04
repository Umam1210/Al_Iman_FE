import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVouchers, giveVoucher } from '../../services/voucher'
import CardVoucherUser from './CardVoucherUser'
import { useNavigate } from 'react-router-dom'

const listVoucher = []
export default function CardAddVoucherToUser({ userId }) {
    const [voucher, setVoucher] = useState(listVoucher?.[0])
    const dispatch = useDispatch()
    const Voucher = useSelector((state) => state?.voucher?.vouchers)
    const navigate = useNavigate()
    const [, setFormData] = useState({
        idUser: '',
        idVoucher: '',
    });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            idUser: userId,
            idVoucher: voucher?.id

        };

        try {
            const response = await dispatch(giveVoucher(user));
            if (response.payload.message == 'Registrasi berhasil') {
                setFormData({
                    idUser: '',
                    idVoucher: '',
                });
                navigate('/admin/list-pengguna');
            } else {
                // console.log("Gagal melakukan register:", response.payload.error);
                // setError(response.payload.error);
                // setIsOpen(true);
            }
        } catch (error) {
            // console.log('General Error:', error);
        }
    };




    useEffect(() => {
        dispatch(getAllVouchers())
    }, [])

    useEffect(() => {
        if (Voucher.length > 0) {
            const updatedListVoucher = Voucher.map((item) => ({
                name: item.name,
                id: item.id
            }));
            setVoucher(updatedListVoucher[0]);
            setListVoucher(updatedListVoucher);
        }
    }, [Voucher]);

    const setListVoucher = (vouchers) => {
        listVoucher.splice(0, listVoucher.length, ...vouchers);
    };

    return (
        <>
            <div className='mt-8 border border-[#E9E9E9]'>
                <form action="" onSubmit={handleSubmit} method="post">
                    <div className='h-auto w-[892px] pb-5 '>
                        <div className='h-[84.55px] w-full bg-[#E9E9E9] text-[24px] font-normal flex items-center pl-[70px] text-[#000000B2]'>
                            <p>Voucher</p>
                        </div>
                        <div className='pl-[70px] mt-6 flex flex-col gap-9 text-[24px]'>
                            <div className='flex flex-col gap-3 pr-[70px]'>
                                <p>Pilih Voucher</p>
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
                                                {listVoucher.map((person, personIdx) => (
                                                    <Listbox.Option
                                                        key={personIdx}
                                                        className={({ active }) =>
                                                            `relative rounded-md cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-[#FFFFFF] text-[#54a7f0]' : 'text-[#000000]'
                                                            }`
                                                        }
                                                        value={person}
                                                    >
                                                        {({ selected }) => (
                                                            <>
                                                                <span
                                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                        }`}
                                                                >
                                                                    {person.name}
                                                                </span>
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
                        </div>
                        <div className='w-full flex justify-end gap-[30px] pr-[70px] mt-10 text-[21px]'>
                            <button type='submit' className='h-[47px] w-[211px] border border-[#0089FF] bg-[#2D9CDB] rounded-md text-[#FFFFFF]'>Beri Voucher</button>
                        </div>
                    </div>
                </form>
                <div className='pb-6'>
                    <CardVoucherUser userId={userId} />
                </div>
            </div>
        </>
    )
}
