import { Listbox, Transition } from '@headlessui/react'
import React from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { updateOrder } from '../../services/orders'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Status = [
    { name: 'menunggu konfirmasi' },
    { name: 'dikonfirmasi' },
    { name: 'selesai' },
    { name: 'dibatalkan' },
]

export default function CardKelolaPemesanan({ order }) {
    const [status, setStatus] = useState(Status[0])
    const orderUserId = order?.orderId
    const productId = order?.productId;
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedOrder = {
            status: status?.name,
            productId: productId
        };

        try {
            const response = await dispatch(updateOrder({ orderId: orderUserId, data: updatedOrder }));
            if (response?.payload?.message === 'Order berhasil diubah') {
                navigate('/admin/pesanan/menunggu-konfirmasi');

            } else {
                // console.log('Gagal:', response);
            }
        } catch (error) {
            // console.log('General Error:', error);
        }

    };

    useEffect(() => {
        if (order) {
            const initialStatus = Status.find((item) => item.name === order.status);
            if (initialStatus) {
                setStatus(initialStatus);
            }
        }
    }, [order]);


    return (
        <div className='xxl:w-[655px] xl:w-[655px] w-auto  text-[#000000B2]'>
            <div className='h-[74px] border border-[#8181813D] flex items-center pl-[51px] bg-[#E9E9E9]'>
                <p className='text-[24px] font-normal text-[#000000B2]'>Kelola Pesanan</p>
            </div>
            <div className='h-[203px] border border-[#8181813D] px-7 pt-6 text-black text-opacity-70 text-[24px] font-bold'>
                <form action="" onSubmit={handleSubmit}>
                    <p>Status</p>
                    <div className='w-full mt-3'>
                        <Listbox value={status} onChange={setStatus}>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative w-full h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md text-left pl-4">
                                    <span className="block truncate text-[24px] font-normal text-opacity-70">{status.name}</span>
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
                                        {Status.map((person, personIdx) => (
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
                    <div className="w-full h-[52px] mt-3 bg-sky-500 rounded-md border border-sky-500 justify-center items-center gap-1 inline-flex">
                        <button type='submit' className="text-center text-white text-[24px] font-normal leading-tight">Simpan</button>
                    </div>
                </form>
            </div>

        </div>

    )
}
