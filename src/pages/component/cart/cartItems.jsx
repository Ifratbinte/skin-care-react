import React, { useContext } from 'react'
import { CartContext } from '../cart';

const CartItems = ({id, image, title, desc, price, amount }) => {

    const {removeItem, increment, decrement} = useContext(CartContext);
    
    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={image} alt="product" />
                </div>
                <div className="title">
                    <h5>{title}</h5>
                    <p>{desc}</p>
                </div>
                <div className="cart-product-qunty cart-details-qunty">
                    <ul>
                        <li className="entry value-minus"><i className="fa fa-minus" onClick={ () => decrement(id)}></i></li>
                        <li className="value-entry"><input type="text" placeholder={amount} maxLength={3} size={3}/></li>
                        <li className="entry value-plus active"><i className="fa fa-plus" onClick={ () => increment(id)}></i></li>
                    </ul> 
                </div>
                
                <div className="price">
                    <h5>{price} USD</h5>
                </div>
                <div className="remove-item">
                    <i className="fa fa-trash" onClick={() => removeItem(id)}></i>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CartItems;