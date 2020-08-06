import React, {useState} from 'react';
import './sass/styles.scss'
import Header from './components/Header';
import Product from './components/Product';
import Cart from './components/Cart';
import Footer from './components/Footer';


function App() {

  //products data
  const [products, setProducts] = useState([
    { id:'1', name:'producto1', price:'30'},
    { id:'2', name:'producto2', price:'20'},
    { id:'3', name:'producto3', price:'10'}
  ])

  //get actual year for footer message
  const fecha = new Date().getFullYear()

  // set shooping cart
  const [cart, setCart] =useState([])

  return (
    <div className="container m-auto">
      <Header 
        title='Productos seleccionados'
      />
      <div className='row'>
        <div className='col-6'>
          {products.map(product =>(
            <Product 
              products = {products}
              key={product.id}
              product = {product}
              cart = {cart}
              setCart = {setCart} 
            />
            )) 
          }
        </div>
    
        <div className='col-6'>
          <Cart
            cart ={cart}
            setCart={setCart}
          />
        </div>
      </div>

      <Footer 
        footer='Todos los derechos reservados &copy;'
        fecha={fecha}
      />
    </div>
  );
}

export default App;
