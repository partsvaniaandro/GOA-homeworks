import {  useContext } from 'react'
import { AddToCartContext } from '../contexts/AddToCartContext'
import { Data } from '../Data'


const Cart = () => {
  const { cart, removeFromCart } = useContext(AddToCartContext)
  return (

    <div>
      {cart.map((product)=>(
        <div key={product.id}>
          <img src={product.imageUrl}/>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <div>
              <p>{product.rating}</p>
              <p>{product.price}</p>
          </div>
          <button onClick={() => removeFromCart(product.id)}>REMOVE FROM CART</button>
        </div>
      ))}
    </div>
  )
}

export default Cart