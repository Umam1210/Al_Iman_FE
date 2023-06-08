import React from 'react'

export default function Dashboard() {
    return (
        <>
            <div className='pl-[98px]'>
                <p className='text-[32px] font-bold mt-12'>Dashboard</p>
                <div className='flex flex-row gap-8 mt-11 '>
                    <div className='h-[284px] w-full bg-red-400'></div>
                    <div className='h-[284px] w-full bg-red-400'></div>
                </div>
                <div className='mt-14'>
                    <div className='h-[436px]  w-full bg-red-500'></div>
                </div>
                <div className='mt-4'>
                    <div className='h-[436px]  w-full bg-red-500'></div>
                </div>
            </div>

        </>
    )
}
