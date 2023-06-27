import React from 'react'
import { useParams } from 'react-router-dom'
import DetailProductPesanan from '../../components/pembeli/DetailProductPesanan';
import FormPesananPembeli from '../../components/pembeli/FormPesananPembeli';

export default function FormPesanan() {
    const param = useParams()
    const productId = param?.id

    return (
        <div className='pl-[98px]'>
            <p className='text-[32px] font-bold mt-12'>Pesan {param?.title}</p>
            <div className='mt-6'>
                <div className='flex flex-row gap-5'>
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
