import React from 'react'
import HomePage from '../../components/layout/HomePage'
import { products } from '../../data/Dummy'

export default function AdminHomePage() {
    return (
        <>
            <HomePage products={products} />
        </>
    )
}
