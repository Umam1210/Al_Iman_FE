import React, { useEffect, useState } from 'react'
import Header from './Header'
import CardLogin from '../navigation/CardLogin'
import { useLocation } from 'react-router-dom'
import NavigationAdmin from '../admin/NavigationAdmin'
import NavigationPembeli from '../pembeli/NavigationPembeli'
import NavigationPelapak from '../pelapak/NavigationPelapak'

export default function Layout({ children }) {
    const location = useLocation()
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState('guest')
    const [href, setHref] = useState('Login')
    useEffect(() => {
        if (location.pathname.substring(1, 6) === 'admin') {
            setLogin(true)
            setHref('Admin')
            setUser('admin')
        } else if (location.pathname.substring(1, 8) === 'pembeli') {
            setLogin(true)
            setHref('Pembeli')
            setUser('pembeli')
        } else if (location.pathname.substring(1, 8) === 'pelapak') {
            setLogin(true)
            setHref('pelapak')
            setUser('pelapak')
        }
    }, [location])

    // console.log(location.pathname.substring(1, 8));
    // console.log("user", user);
    return (
        <>
            <div className='sticky top-0 z-20'>
                <Header href={href} />
            </div>
            <main className='col-span-12 bg-[#FFFFFF]'>
                <div className='xxl:grid xxl:grid-cols-12 xl:grid xl:grid-cols-12 lg:grid lg:grid-cols-12 md:flex md:flex-col-reverse sm:flex sm:flex-col-reverse xs:flex xs:flex-col-reverse s:flex s:flex-col-reverse gap-0'>
                    <div className='col-span-9'>
                        {children}
                    </div>
                    <div className='col-span-3 h-full mt-14'>
                        <div className='sm:flex sm:justify-center sm:items-center xs:flex xs:justify-center xs:items-center s:flex s:justify-center s:items-center'>
                            {login === false ? <CardLogin /> :
                                user === 'admin' ? <NavigationAdmin /> :
                                    user === 'pembeli' ? <NavigationPembeli /> :
                                        user === 'pelapak' ? <NavigationPelapak /> : ''}

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
