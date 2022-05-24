import React from 'react'
import './cart/cart.css'
import CartItems from './cart/cartItems'
import { Scrollbars } from 'react-custom-scrollbars-2';

const cart = () => {
  return (
    <>
        <div className="cart-shop">
            <div className="container">
                <div className="cart-header">
                    <div className="continue-shopping">
                        <img src="./assets/img/icons/arrow.png" alt="arrow" className='arrow-icon'/>
                        <a href="/product">Continue Shopping</a>
                    </div>
                    <div className="cart-icon">
                        <img src="./assets/img/icons/cart.png" alt="" />
                        <p>7</p>
                    </div>
                </div>
                <hr />
                
                <section className="main-cart-section section-gap">
                    <h3>Shopping Cart</h3>
                    <p className="total-items">You have <span className="total-item-count">7</span> items</p>
                    <div className="cart-items">
                        <div className="cart-items-container">
                            <Scrollbars>
                                <CartItems/>
                            </Scrollbars>
                        </div>
                    </div>
                    <div className="card-total">
                        <h4>Cart Total : <span>2200</span></h4>
                        <div className="cart-bottom-btn">
                            <a href="#" className='button button-sqr btn-transparent mr-2'>Checkout</a>
                            <a href="#" className='button button-sqr btn-bg'>Clear cart</a>
                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
    </>
  )
}

export default cart