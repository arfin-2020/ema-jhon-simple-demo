import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import Product from '../product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    const [cart,SetCart] = useState([]);
    // console.log(first10);
    const handleAddProduct = (product) =>{
        // console.log("working",product);
        const newCart = [...cart, product];  //ager cart k array ar modde copy kortese
        SetCart(newCart);
    }
    return (
        <div className = "shop-container">
            <div className="product-container">
            {
                products.map(product => <Product product = {product} handleAddProduct = {handleAddProduct}></Product>)
            }
            
            </div>
            <div className="cart-container">
                {/* <h1>This is a cart</h1>
                <h2>Order Cart : {cart.length}</h2> */}
              <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;