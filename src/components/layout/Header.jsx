import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

import {
    Bars3Icon,
} from '@heroicons/react/24/outline'


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="bg-[#000000] ">
            <nav className="mx-auto h-[85px] flex max-w-full items-center justify-between lg:px-8 md:px-4 sm:px-10 xs:px-6" aria-label="Global">
                <div className="flex lg:flex-1">
                    <span className="text-[26px] font-bold text-[#FFFFFF]">Al-Iman Boga</span>

                </div>
                <div className="flex flex-1 justify-end">
                    <p className="text-[26px] font-normal text-[#FFFFFF]">
                        Login
                    </p>
                </div>
            </nav>

        </header>
    )
}
