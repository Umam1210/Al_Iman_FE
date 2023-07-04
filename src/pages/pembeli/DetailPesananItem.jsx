import React from 'react'
import CardDetailPemesanan from '../../components/pembeli/CardDetailPemesanan'
import CardDetailPemesan from '../../components/pembeli/CardDetailPemesan'
import CardDetailPesanan from '../../components/pembeli/CardDetailPesanan'

export default function DetailPesananItem() {


    return (
        <div className='pl-[98px]'>
            <p className='text-[32px] font-bold mt-12'>Detail Pesanan</p>
            <div className='mt-6'>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <CardDetailPemesan />
                        </div>
                        <div>
                            <CardDetailPemesanan />
                        </div>
                    </div>
                    <div>
                        <CardDetailPesanan />
                    </div>
                </div>
            </div>
        </div>
    )
}
