import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
const Product = ( {id, title, price, rating, image } ) => {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type:'ADD_TO_BASKET',
            item : {
                id,
                title,
                price,
                rating,
                image,
            },
        })
    }
    return (
        <div className = "product">
           <div className="product__info">
                <p>{title}</p>
                
                    <p className = "product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {
                            Array(rating)
                            .fill()
                            .map((_) =>(
                                <p>⭐</p>
                            ))
                        }
            </div>
            </div>  
           
            <br />
            
            <div>
                <img className ="product__image" src={image} alt=""/>
            </div>
            <button onClick = {addToBasket}>Add to Basket</button>
            
        </div>
    )
}

export default Product
