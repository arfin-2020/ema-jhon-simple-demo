import React from 'react';


const Cart = (props) => {
    // console.log(props);
    const cart = props.cart
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;

        // total = Math.round(total + product.price); ai babe o korle hobe
    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const tax = total / 10;
    // const tax = Math.round(total/10);ai babe o korle hobe
    const grandTotal = total + shipping + tax;
    // const grandTotal = Math.round(total + shipping + tax); ai babe o korle hobe

    //Create a templete here 
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order summary:  </h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping cost: {shipping}</small></p>
            <p>TAX + VAT : {formatNumber(tax)}</p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
            <br />
            {
                props.children
            }
        </div>
    );
};

export default Cart;