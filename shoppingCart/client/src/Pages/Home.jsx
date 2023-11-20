
import { useSelector } from 'react-redux'
import Banner from '../components/Banner/Banner.jsx'
import Product from '../components/Products/Product.jsx'

import './Home.css'
export default function Home() {
    const { cart } = useSelector((state) => state.cart)
    console.log(cart.length)
    return (
        <div>
            <Banner />
            <Product />
            <h1 style={{ color: 'white' }}>{cart.length}</h1>
        </div>

    )
}
