import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvaider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (producto) => {
        let existe = isInCart(producto.id);

        if (existe) {
            let newCart = cart.map((elemento) => {
                if (elemento.id === producto.id) {
                    return {
                        ...elemento,
                        quantity: producto.quantity,
                    };
                } else {
                    return elemento;
                }
            });

            setCart(newCart);
        } else {
            setCart([...cart, producto]);
        }
    };

    const isInCart = (id) => {
        return cart.some((element) => element.id === id);
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalQuantity = () => {
        return cart.reduce((acc, elemento) => {
            return acc + elemento.quantity;
        }, 0);
    };

    const getTotalPrice = () => {
        let precioTotal = cart.reduce((acc, elemento) => {
            return acc + elemento.quantity * elemento.price;
        }, 0);

        return precioTotal;
    };

    const deleteProductById = (id) => {
        const newCart = cart.filter((elemento)=>elemento.id !== id);

        setCart(newCart);
        
        console.log(id);
    };

    const getQuantityById = (id) => {
        const productoSeleccionado = cart.find((elemento)=>elemento.id === id)
        return productoSeleccionado?.quantity
    }

    let data = {
        cart,
        agregarAlCarrito,
        clearCart,
        getTotalQuantity,
        getTotalPrice,
        deleteProductById,
        getQuantityById
        // setCart: setCart,
        // cuando la propiedad y su valor se llaman igual pueo omitir el valor
    };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvaider;
