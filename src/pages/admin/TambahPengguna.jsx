import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Dialog, Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../services/user'

const Role = [
    { name: 'pembeli' },
    { name: 'pelapak' },
    { name: 'admin' },
]
export default function TambahPengguna() {
    const [role, setRole] = useState(Role[0]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        no_kk: '',
        kontak: '',
        role: '',
        alamat: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            name: formData.name,
            email: formData.email,
            no_kk: formData.no_kk,
            kontak: formData.kontak,
            alamat: formData.alamat,
            password: formData.password,
            role: role.name
        };

        try {
            const response = await dispatch(registerUser(user));
            if (response.payload.message == 'Registrasi berhasil') {
                setFormData({
                    name: '',
                    email: '',
                    no_kk: '',
                    kontak: '',
                    alamat: '',
                    password: '',
                    role: ''
                });
                navigate('/admin/list-pengguna');
            } else {
                // console.log("Gagal melakukan register:", response.payload.error);
                setError(response.payload.error);
                setIsOpen(true);
            }
        } catch (error) {
            // console.log('General Error:', error);
        }
    };

    const closeModal = () => {
        setIsOpen(false);
    };


    return (
        <>
            <div className='xxl:pl-[98px] xl:pl-[98px] lg:pl-32 xs:px-10 s:px-10'>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>
                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white px-6 py-3 text-left align-middle shadow-xl flex flex-row justify-between transition-all">
                                        <div>
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-medium leading-6 text-gray-900"
                                            >
                                                Register Gagal
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    {error}
                                                </p>
                                            </div>

                                        </div>
                                        <div className="">
                                            <button
                                                type="button"
                                                className=""
                                                onClick={closeModal}
                                            >
                                                <XMarkIcon className='h-10 w-10 text-red-500' />
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
                <p className='text-[32px] font-bold mt-12'>Tambah Pengguna</p>
                <div className='mt-8'>
                    <form action="" onSubmit={handleSubmit} method="post">
                        <div className='h-auto xxl:w-[892px] xl:w-[892px] w-auto pb-5 border border-[#E9E9E9]'>
                            <div className='h-[84.55px] w-full bg-[#E9E9E9] text-[24px] font-normal flex items-center pl-[70px] text-[#000000B2]'>
                                <p>Data Pengguna</p>
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
                                    <p>Email</p>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>No. KK</p>
                                    <input
                                        type="number"
                                        name="no_kk"
                                        id="no_kk"
                                        value={formData.no_kk}
                                        onChange={handleChange}
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Role</p>
                                    <Listbox value={role} onChange={setRole}>
                                        <div className="relative mt-1">
                                            <Listbox.Button className="relative w-full h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md text-left pl-4">
                                                <span className="block truncate ">{role.name}</span>
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
                                                    {Role.map((person, personIdx) => (
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
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Kontak</p>
                                    <input
                                        type="number"
                                        name="kontak"
                                        id="kontak"
                                        value={formData.kontak}
                                        onChange={handleChange}
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Alamat</p>
                                    <textarea
                                        rows={4}
                                        name="alamat"
                                        id="alamat"
                                        value={formData.alamat}
                                        onChange={handleChange}
                                        className='h-[127px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-3 pr-[70px]'>
                                    <p>Kata Sandi</p>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className='h-[52px] outline-none border border-[#00000040] bg-[#E8F0FD] rounded-md px-2'
                                        required
                                    />
                                </div>
                            </div>
                            <div className='w-full flex xxl:justify-end xl:justify-end lg:justify-end md:justify-end items-center xxl:flex-row xl:flex-row lg:flex-row md:flex-col xs:flex-col s:flex-col gap-[30px] xxl:pr-[70px] xl:pr-[70px] lg:pr-[70px] md:pr-10 mt-10 text-[21px]'>
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
