import React from 'react';
import Product from '../Product';

const CartSummary = ({cart, setCart}) => {

    return ( 
        <>
        { cart.length === 0 ? 
        <p>carrito vacio</p>
        :
        cart.map(product =>(
            <Product
                key = {product.id}
                product = {product}
                cart={cart}
                setCart={setCart}
            />
          ))
        }
        <p>Total: </p>
        </>
    )
}
 
export default CartSummary;