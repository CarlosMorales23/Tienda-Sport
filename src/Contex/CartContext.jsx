// importamos createContex desde react para poder crear el CONTEX
import { createContext, useState } from "react";

// creamos una contante con el nombre del archivo igualandola a createContex()
// Listo ya creamos el CONTEX
export const CartContext = createContext();

// Creemos el Componente proveedor para poner a dispocision el CONTEX
const CartContextProvaider = ({ children }) => {
    // mediante el children recibo TODO lo que mis componentes tienen, todos aquellos a los que envuelve en el app
    
    const [cart, setCart] = useState([])
    
    const agregarAlCarrito = (producto)=>{
        setCart([...cart, producto])
    }



    // AGREGAR
    // ELIMINAR
    // CONTAR
    // TOTAL DEL PRECIO DEL CARRITO
    
    let data ={
        cart,
        agregarAlCarrito
        // setCart: setCart,
        // cuando la propiedad y su valor se llaman igual pueo omitir el valor

    }

    return (
        <CartContext.Provider value={data}>
            {children}
            {/*renderizando las children permito que todos mis componentes envueltos, puedan usar toda la info recibida por Children  */}
        </CartContext.Provider>
    );
};

export default CartContextProvaider;