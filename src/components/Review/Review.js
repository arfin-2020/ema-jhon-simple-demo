import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Reviewitem from '../Reviewitem/Reviewitem';
import happyImage from '../../images/giphy.gif';
const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false);
    const placeOrderHandler = () => {
        // console.log("it's working");
        setCart([]);
        setOrderPlace(true);
        processOrder();
    }
    const removeProduct = (productkey) => {
        // console.log("working", productkey);
        const newCart = cart.filter(pd => pd.key !== productkey)
        setCart(newCart);
        removeFromDatabaseCart(productkey);
    }

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productkey = Object.keys(saveCart);
        const cartProduct = productkey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        })
        setCart(cartProduct);
        // console.log(productkey);
        // console.log(cartProduct);
    }, []);
    let thankyou;
    if (orderPlace) {
        thankyou = <img src={happyImage} alt="googleImg" />
    }
    return (
        <div className="twin-container">
            <div className="product-container">
                {/* <h1>total cart length: {cart.length}</h1> */}
                {
                    cart.map(pd => <Reviewitem product={pd} key={pd.key} removeProduct={removeProduct}></Reviewitem>)
                }
                {
                    thankyou
                }
            </div>
            <div className="cart-container">
                <h1>This is cart Container </h1>
                <Cart cart={cart}>
                    <button onClick={placeOrderHandler} className="add-btn">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;