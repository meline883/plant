import { productData } from './data'
import { useContext } from 'react'
import { CartContext } from './CartContext'
import './shop.css'

export const Shop = () => {
    const { addToCart } = useContext(CartContext);
    return (
        <>
            <div className="shop">
                {productData.map((item) => (
                    <div key={item.id} className='shopCart'>
                        <img width='300px' height='200px' src={item.img} alt="" />
                        <p>Product Name: {item.name}</p>
                        <p>Price` {item.price}$</p>
                        <button onClick={() => addToCart(item)} className="button" style={{ verticalAlign: 'middle' }}><span>Add To Cart</span></button>

                    </div>
                ))}
            </div>
        </>
    )

}

