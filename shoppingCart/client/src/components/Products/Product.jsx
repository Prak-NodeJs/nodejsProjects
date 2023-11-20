import { useEffect, useState } from 'react'
import './Product.css'
import { addToCart } from '../../redux/cart/cart'
import { useDispatch } from 'react-redux'
export default function Product() {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch('http://localhost:5000/api/product/')
            const data = await res.json()
            setProducts(data.data)
        }
        getProducts()
    }, [])

    return (
        <div className="div">
            <h3>Our Products</h3>
            <div className='product_container'>
                {
                    products.map((product) =>
                        <section className='product_section' key={product._id}>
                            <img src={product.image} alt='images' />
                            <div className="price">
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                            </div>
                            <button onClick={() => dispatch(addToCart({ id: product._id, name: product.name, image: product.image, price: product.price }))}>Add to Cart</button>
                        </section>
                    )
                }
            </div>
        </div>
    )
}
