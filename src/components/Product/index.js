import React from 'react'

const Product = ({product, cart, setCart, products}) => {

    // destructuring product properties
    const {id, name, price} = product

    // function to add product to the cart
    const addProduct = (id) =>{
        // get the objetc of the product selected just one product so, I set the position 0 of the array to get the object and not and array with an object
            //const productSelected = products.filter(e => e.id === id)[0]

        // add to the cart array
            //setCart([...cart, productSelected])

        // -----------------Another way is join two arrays with spread operator------------------------
            // get the array of the product selected with filter method
            const productSelected = products.filter(e => e.id === id)

            // add to the cart array joiing two arrays in one
            setCart([...cart, ...productSelected])
    }

    // function to remove product of the cart
    const removeProduct = (id) =>{
        // get the objetc of the product selected just one product so, I set the position 0 of the array to get the object and not and array with an object
        // set != because I want the array with out the product selected
            //const productSelected = products.filter(e => e.id !== id)[0]

        // add to the cart array
            //setCart([...cart, productSelected])

        // -----------------Another way is join two arrays with spread operator------------------------
            // get the array of the product selected with filter method
            // set != because I want the array with out the product selected
            const updateCart = cart.filter(e => e.id !== id)

            // add to the cart array joiing two arrays in one
            setCart(updateCart)
    }

    return (
        <ul>
            <li className='d-flex'>
                <p className='pr-2'>{name}</p>
                <p>${price}</p>
                {products 
                ?
                    <button
                        type='button'
                        onClick={() =>{addProduct(id)}}
                    >Comprar</button>
                :
                    <button
                        type='button'
                        onClick={() =>{removeProduct(id)}}
                    >Eliminar</button>
                }
                
            </li>
        </ul>
    )
}

export default Product;