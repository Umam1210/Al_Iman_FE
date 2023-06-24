import React from 'react'
import DashboardPembeliCard from '../../components/pembeli/DashboardPembeliCard'

export default function DashboardPembeli() {
    return (
        <>
            <div className='pl-[98px]'>
                <p className='text-[32px] font-bold mt-12'>Dashboard</p>
                <div className='mt-4'>
                    <div className=' w-full'>
                        <DashboardPembeliCard />
                    </div>
                </div>
            </div>

        </>
    )
}
