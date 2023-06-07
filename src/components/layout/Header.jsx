import React from 'react'

export default function Header({ href }) {
    return (
        <header className="bg-[#000000] ">
            <nav className="mx-auto h-[85px] flex max-w-full items-center justify-between lg:px-8 md:px-4 sm:px-10 xs:px-6" aria-label="Global">
                <div className="flex lg:flex-1">
                    <span className="text-[26px] font-bold text-[#FFFFFF]">Al-Iman Boga</span>

                </div>
                <div className="flex flex-1 justify-end">
                    <p className="text-[26px] font-normal text-[#FFFFFF]">
                        {href}
                    </p>
                </div>
            </nav>

        </header>
    )
}
