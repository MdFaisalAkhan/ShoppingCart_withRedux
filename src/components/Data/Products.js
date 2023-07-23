import React from 'react';
import "./Product.css";

const Products = ({productItem}) => {
    return (
        <div className='products'>
            {productItem.map((productitem)=>(
                <div className='card'>
                <div>
                    <img className='product-image' src={productItem.image} alt={productItem.name} />
                </div>
                </div>
            ))}
        </div>
    )
}

export default Products;
