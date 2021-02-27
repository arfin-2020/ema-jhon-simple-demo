import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = (props) => {
    // console.log(props.product);
    // console.log(props);
    const { img, name, seller, price, stock } = props.product //This is a destructuring 
    return (
        <div className="product">
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="productDetails-container">
                <h4 className="products-name">This is a products {name}</h4>
                <br />
                <p><small>by: {seller}</small> </p><br />
                <p>${price}</p>
                <p><small>Only {stock} left in stock-order soon</small></p>
                <button className="add-btn" onClick = {() => props.handleAddProduct(props.product)} ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;