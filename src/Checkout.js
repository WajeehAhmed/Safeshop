import React from 'react'
import './Checkout.css'
import {useStateValue} from './StateProvider'
import cart from './cart.png'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = () => {
    const [{basket}] = useStateValue();
    return (
        <div className = "checkout">
            <div className="checkout__left">
            {basket?.length === 0 ? (
              <div className = "empty__basket">
                  <h2 className = "checkout__title">Basket is Empty!</h2>
              </div>
          ):
          (
              <div>
                  <h2 className="checkout__title">
                      Shoping Cart
                  </h2>
                  {
                      basket?.map((item) => (
                          <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                          />
                      ))
                  }
              </div>
          )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <h2>Subtotal</h2>
                    <Subtotal />
                </div>
            )}
                      
        </div>
    )
}

export default Checkout
