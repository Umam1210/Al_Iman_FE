import React from 'react'
import { useParams } from 'react-router-dom'
import DetailProductPesanan from '../../components/pembeli/DetailProductPesanan';
import FormPesananPembeli from '../../components/pembeli/FormPesananPembeli';

export default function FormPesanan() {
    const param = useParams()
    const productId = param?.id

    return (
        <div className='xxl:pl-[98px] xl:pl-[98px] lg:pl-32 xs:px-16 s:px-10'>
            <p className='text-[32px] font-bold mt-12'>Pesan {param?.title}</p>
            <div className='mt-6'>
                <div className='flex xxl:flex-row xl:flex-row flex-col gap-5'>
                    <div>
                        <DetailProductPesanan param={param} />
                    </div>
                    <div>
                        <FormPesananPembeli productId={productId} />
                    </div>
                </div>
            </div>
        </div>
    )
}
