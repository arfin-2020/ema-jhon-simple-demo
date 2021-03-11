import React, { useEffect, useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import Product from '../product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, SetCart] = useState([]);
    // console.log(first10);

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productkey = Object.keys(saveCart);
        const previousCart = productkey.map(existinkey => {
            const product = fakeData.find(pd => pd.key === existinkey);
            product.quantity = saveCart[existinkey];
            return product;
        })
        SetCart(previousCart);
    }, [])

    const handleAddProduct = (product) => {
        // console.log("working",product);
        const toBeAdded = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAdded);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const other = cart.filter(pd => pd.key !== toBeAdded);
            newCart = [...other, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        SetCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    products.map(product => <Product product={product}
                        key={product.key} showAddToCart={true}
                        handleAddProduct={handleAddProduct}></Product>)
                }
            </div>
            <div className="cart-container">

                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="add-btn"> Order Review</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;