import React, { useContext } from "react";
import { CartContext } from "../../Contex/CartContext";



const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            {
                cart.map( (elemento)=>{
                    return (
                        <div>
                            <h2>{elemento.title}</h2>
                            <h3>{elemento.price}</h3>
                            <img
                                src={elemento.img}
                                alt=""
                                style={{ width: 200 }}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Cart;
