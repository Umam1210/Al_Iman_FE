import React, { useEffect } from 'react'
import DaftarProductPelapak from '../../components/pembeli/DaftarProductPelapak'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { getProductByIdUser } from '../../services/product'

export default function DaftarProductByIdPelapak() {

    const dispatch = useDispatch()
    const product = useSelector((state) => state.product)
    const name = useLocation()
    const user = useParams()
    const userId = user?.id
    useEffect(() => {
        dispatch(getProductByIdUser(userId));
    }, [dispatch]);

    console.log("product", product?.userProducts.length);
    return (
        <div className='pl-[98px]'>
            <p className='text-[32px] font-bold mt-12'>Daftar Produk Lapak {name?.state?.name}</p>
            <div className='mt-6'>
                {product?.userProducts.length === 0 ?
                    <div className='text-2xl'>
                        <p>Pelapak Belum Mempunyai Produk yang di jual</p>
                    </div> : <div className=' w-full'>
                        <DaftarProductPelapak product={product} />
                    </div>}

            </div>
        </div>

    )
}
