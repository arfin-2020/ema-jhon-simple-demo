import React from 'react';

const Reviewitem = (props) => {
    // console.log(props.removeProduct);
    const { name, quantity, key, price } = props.product;
    const reviewItemStyle = {
        borderBottom: "1px solid lightgrey",
        marginBottm: "5px",
        paddingBottom: "5px",
        marginLeft: "200px"
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="products-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p> <small>price: ${price}</small> </p>
            <button onClick={() => props.removeProduct(key)} className="add-btn">Remove</button>
        </div>
    );
};

export default Reviewitem;