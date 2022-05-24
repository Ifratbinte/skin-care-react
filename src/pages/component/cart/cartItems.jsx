import React from 'react'
const cartItems = () => {
    
  return (
    <>
        <div>
            <div className="items-info">
                <div className="product-img">
                    <img src="/assets/img/product/8.jpg" alt="product" />
                </div>
                <div className="title">
                    <h5>Hair Oil</h5>
                    <p>Lorem, ipsum.</p>
                </div>
                <div class="cart-product-qunty cart-details-qunty">
                    <ul>
                        <li class="entry value-minus"><i class="fa fa-minus" aria-hidden="true"></i></li>
                        <li class="entry value"><span>1</span></li>
                        <li class="entry value-plus active"><i class="fa fa-plus" aria-hidden="true"></i></li>
                    </ul>
                </div>
                <div className="price">
                    <h5>1000</h5>
                </div>
                <div className="remove-item">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </div>
            </div>
            <hr />
        </div>
    </>
  )
}

export default cartItems