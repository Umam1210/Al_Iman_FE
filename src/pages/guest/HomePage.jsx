import React from 'react'

import HomePage from '../../components/layout/HomePage'
import { products } from '../../data/Dummy'


export default function Home() {
    // const [products, setProducts] = useState([])
    // const getData = async () => {
    //     const data = await axios.get('http://localhost:8080/api/v1/products')
    //     const rest = data?.data
    //     setProducts(rest)
    // }
    // useEffect(() => {
    //     getData()
    // }, [])

    // console.log("data", products);
    return (
        <>
            <HomePage products={products} />
        </>
    )
}
