import React, { useContext } from "react";
import { CartContext } from "../../Contex/CartContext";



const Cart = () => {
    const { cart, clearCart, getTotalPrice } = useContext(CartContext);

    const precioTotal = getTotalPrice()

    return (
        <div style={{width: "100%", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
            {
                cart.map( (elemento)=>{
                    return (
                        <div style={{border: "2px solid black"}}>
                            <h2>{elemento.title}</h2>
                            <h3>{elemento.price}</h3>
                            <h3> Cantidad : {elemento.quantity}</h3>
                            <img
                                src={elemento.img}
                                alt=""
                                style={{ width: 200 }}
                            />
                        </div>
                    );
                })
            }

            <h1>El total de su compra sera de : {precioTotal}</h1>
            <button onClick={clearCart}> Limpiar carrito</button>
        </div>
    );
};

export default Cart;
