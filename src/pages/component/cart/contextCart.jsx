import React, {useContext} from 'react'
import CartItems from './cartItems'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CartContext } from '../cart';

const ContextCart = () => {
    
    const {item, clearCart} = useContext(CartContext);

    if(item.length === 0){
        return(
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
                                <p>0</p>
                            </div>
                        </div>
                        <hr />
                        
                        <section className="main-cart-section section-gap">
                            <h3 className='mb-4'>Shopping Cart</h3>
                            <p className="total-items">You have <span className="ttal-items-count">0</span> items in shopping cart</p>
                            <div className="cart-items">
                                <div className="cart-items-container">
                                    <Scrollbars>
                                        {
                                            item.map((currentElm) => {
                                                return <CartItems key ={currentElm.id} {...currentElm}/>
                                            })
                                        }
                                    </Scrollbars>
                                </div>
                            </div>
                            <div className="card-total">
                                <h4>Cart Total : <span>2200</span></h4>
                                <div className="cart-bottom-btn">
                                    <a href="/" className='button button-sqr btn-transparent mr-2' type='button'>Checkout</a>
                                    <a href="/" className='button button-sqr btn-bg' type='button' onClick={clearCart}>Clear cart</a>
                                </div>
                            </div>
                            
                        </section>
                    </div>
                </div>
            </>
        )
    }

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
                    <h3 className='mb-4'>Shopping Cart</h3>
                    <p className="total-items">You have <span className="ttal-items-count">7</span> items in shopping cart</p>
                    <div className="cart-items">
                        <div className="cart-items-container">
                            <Scrollbars>
                                {
                                    item.map((currentElm) => {
                                        return <CartItems key ={currentElm.id} {...currentElm}/>
                                    })
                                }
                            </Scrollbars>
                        </div>
                    </div>
                    <div className="card-total">
                        <h4>Cart Total : <span>2200</span></h4>
                        <div className="cart-bottom-btn">
                            <a href="/" className='button button-sqr btn-transparent mr-2' type='button'>Checkout</a>
                            <a href="/" className='button button-sqr btn-bg' type='button' onClick={clearCart}>Clear cart</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>
    )
}

export default ContextCart;