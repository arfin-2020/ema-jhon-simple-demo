import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../product/Product';

const ProductDetails = () => {
    const { productkey } = useParams();
    const product = fakeData.find(pd => pd.key === productkey);
    // console.log(product);
    return (
        <div>
            <h1>{productkey}This is product details</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;