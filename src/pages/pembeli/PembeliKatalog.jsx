import React from 'react'
import HomePage from '../../components/layout/HomePage'
import { products } from '../../data/Dummy'

export default function PembeliKatalog() {
    return (
        <>
            <HomePage products={products} />
        </>
    )
}
