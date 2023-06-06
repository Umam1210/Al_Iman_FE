import React from 'react'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className='col-span-12'>
                <div className='grid grid-cols-12 gap-0'>
                    <div className='col-span-9 bg-blue-600'>
                        {children}
                    </div>
                    <div className='col-span-3 h-full w-full bg-red-700'>
                        lorem 5
                    </div>
                </div>
            </main>
        </>
    )
}
