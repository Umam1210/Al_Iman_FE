import React from 'react'
import Header from './Header'
import CardLogin from '../navigation/CardLogin'
import NavigationAdmin from '../admin/NavigationAdmin'
import NavigationPembeli from '../pembeli/NavigationPembeli'
import NavigationPelapak from '../pelapak/NavigationPelapak'
import { useSelector } from 'react-redux'

export default function Layout({ children }) {
    const auth = useSelector((state) => state.auth)
    const userData = JSON.parse(localStorage.getItem('userData'));
    const guest = userData?.[0]?.role;
    const href = userData?.[2]?.name

    return (
        <>
            <div className='sticky top-0 z-20'>
                <Header href={href} />
            </div>
            <main className='col-span-12 bg-[#FFFFFF]'>
                <div className='xxl:grid xxl:grid-cols-12 xl:grid xl:grid-cols-12 lg:flex lg:flex-col-reverse md:flex md:flex-col-reverse sm:flex sm:flex-col-reverse xs:flex xs:flex-col-reverse s:flex s:flex-col-reverse gap-0'>
                    <div className='col-span-9'>
                        {children}
                    </div>
                    <div className='col-span-3 h-full mt-14'>
                        <div className='sm:flex sm:justify-center sm:items-center xs:flex xs:justify-center xs:items-center s:flex s:justify-center s:items-center md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center'>
                            {auth.isLogin === false ? <CardLogin /> :
                                guest === 'admin' ? <NavigationAdmin /> :
                                    guest === 'pembeli' ? <NavigationPembeli /> :
                                        guest === 'pelapak' ? <NavigationPelapak /> : ''}

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
