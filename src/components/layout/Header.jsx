import { Menu, Transition } from '@headlessui/react'
import React from 'react'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../services/login'
import { useNavigate } from 'react-router-dom'

export default function Header({ href }) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const auth = userData?.[3]?.isLogin
    const guest = userData?.[0]?.role;
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout());
        navigate('/')
        localStorage.clear()
    };

    return (
        <header className="bg-[#000000] ">
            <nav className="mx-auto h-[85px] flex max-w-full items-center justify-between lg:px-8 md:px-4 sm:px-10 xs:px-6 s:px-4" aria-label="Global">
                <div className="flex lg:flex-1">
                    <span className="text-[26px] font-bold text-[#FFFFFF]">Al-Iman Boga</span>

                </div>
                {auth === undefined ? <div className="flex flex-1 justify-end">
                    <p className="text-[26px] font-normal text-[#FFFFFF]">
                        Login
                    </p>
                </div> : guest != '' ? <div className="flex flex-1 justify-end">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="text-[26px] font-normal text-[#FFFFFF]">
                                {href}
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-2 h-20 w-32 flex items-center justify-center bg-[#E9E9E9] rounded ring-1 ring-[#000000]">
                                <button onClick={handleLogout} className='text-[26px] font-semibold'>
                                    Logout
                                </button>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div> : ''}
            </nav>
        </header>
    )
}
