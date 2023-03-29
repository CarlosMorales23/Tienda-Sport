import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../Contex/CartContext";



const Cart = () => {
    const { cart, clearCart, getTotalPrice, deletProductById } = useContext(CartContext);

    const precioTotal = getTotalPrice()

    return (
        <div style={{width: "100%", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
            {
                cart.map( (elemento)=>{
                    return (
                        <div style={{border: "2px solid black"}} key= {elemento.id}>
                            <h2>{elemento.title}</h2>
                            <h3>{elemento.price}</h3>
                            <h3> Cantidad : {elemento.quantity}</h3>
                            <img
                                src={elemento.img}
                                alt=""
                                style={{ width: 200 }}
                            />
                            <Button variant="contained" style={{margin:"15px"}} onClick= {()=>deletProductById(elemento.id)}>Eliminar</Button>
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
