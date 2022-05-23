import React from 'react';
import {useStateValue} from "./StateProvider";
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
           
            {basket?.length === 0 ? 
                (
                    <h2 className="checkout__title">Il tuo carrello è vuoto</h2>
                ) 
                :
                (
                    <div>
                        <h2 className="checkout__title">Il tuo carrello</h2>
                    </div>
                )
            }

            {basket?.map( (item, index) => (
                <CheckoutProduct key={index} id={item.id} price={item.price} title={item.title} image={item.image} rating={item.rating}/>
            ))}
        </div>
    )
}

export default Checkout;