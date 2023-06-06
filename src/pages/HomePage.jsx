import React, { useEffect, useState } from 'react'

import axios from 'axios';

export default function HomePage() {
    const [products, setProducts] = useState([])
    const getData = async () => {
        const data = await axios.get('http://localhost:8080/api/v1/products')
        const rest = data?.data
        setProducts(rest)
    }
    useEffect(() => {
        getData()
    }, [])

    console.log("data", products);
    return (
        <>

            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptas nihil laudantium, recusandae, ipsa ex natus temporibus error quisquam soluta earum necessitatibus. Nihil soluta laborum nam, eius numquam incidunt sunt!
                HomePage
            </div>

        </>
    )
}
