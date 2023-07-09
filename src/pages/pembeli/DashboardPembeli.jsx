import React from 'react'
import DashboardPembeliCard from '../../components/pembeli/DashboardPembeliCard'

export default function DashboardPembeli() {
    return (
        <>
            <div className='xxl:pl-[98px] xl:pl-[98px] lg:pl-32 xs:px-16 s:px-10'>
                <p className='text-[32px] font-bold mt-12'>Dashboard</p>
                <div className='mt-4'>
                    <div className='w-auto'>
                        <DashboardPembeliCard />
                    </div>
                </div>
            </div>

        </>
    )
}
