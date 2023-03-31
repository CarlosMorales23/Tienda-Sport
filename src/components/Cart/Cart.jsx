import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../Contex/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
    const { cart, clearCart, getTotalPrice, deleteProductById } = useContext(CartContext);

    const precioTotal = getTotalPrice();

    const clear = () => {

        Swal.fire({
            title: "Seguro que quieres borrar todos los productos del carrito?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Si, vaciar",
            denyButtonText: `No, no vaciar`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Carrito borrado exitosamente!", "", "success");
                clearCart();
            } else if (result.isDenied) {
                Swal.fire("Ok, no se borrara su carrito", "", "info");
            }
        });

        
    }



    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
            }}
        >
            {cart.map((elemento) => {
                return (
                    <div
                        style={{ border: "2px solid black" }}
                        key={elemento.id}
                    >
                        <h2>{elemento.title}</h2>
                        <h3>{elemento.price}</h3>
                        <h3> Cantidad : {elemento.quantity}</h3>
                        <img src={elemento.img} alt="" style={{ width: 200 }} />
                        <Button
                            variant="contained"
                            style={{ margin: "15px" }}
                            onClick={() => deleteProductById(elemento.id)}
                        >
                            Eliminar
                        </Button>
                    </div>
                );
            })}
            <h1>El total de su compra sera de : {precioTotal}</h1>´
            {cart.length > 0 && (
                <button onClick={clear}> Vaciar carrito</button>
            )}
        </div>
    );
};

export default Cart;
