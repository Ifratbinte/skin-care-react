import React, {createContext, useReducer} from 'react'
import './cart/cart.css'
import Product from './product/product'
import ContextCart from './cart/contextCart';
import {reducer} from './cart/reducer'

export const CartContext = createContext()

const initialState = {
    item : Product,
    totalAmount : 0,
    totalItem: 0
};

const Cart = () => {

    // const [item, setItem] = useState(Product);
    const [state, dispatch] = useReducer(reducer, initialState);

    // to delete the individual item from cart
    const removeItem =(id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id, //any name > payload
        })
    };

    //clear the cart
    const clearCart = () => {
        return dispatch({  
            type : "CLEAR_CART"
        })
    };

  return (

    <CartContext.Provider value={{ ...state, removeItem, clearCart }}>
        <ContextCart/>
    </CartContext.Provider>
    
  )
}

export default Cart;