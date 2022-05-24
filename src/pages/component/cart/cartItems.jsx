import React from 'react'
import IncrementDecrement from '../cart/incrementDecrement';
const CartItems = ({image, title, desc, currentPrice, amount }) => {
    
    return (
        <>
            <div>
                <div className="items-info">
                    <div className="product-img">
                        <img src={image} alt="product" />
                    </div>
                    <div className="title">
                        <h5>{title}</h5>
                        <p>{desc}</p>
                    </div>
                    <div className="cart-product-qunty cart-details-qunty">
                        <IncrementDecrement/>
                    </div>
                    <div className="price">
                        <h5>{currentPrice}</h5>
                    </div>
                    <div className="remove-item">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default CartItems;