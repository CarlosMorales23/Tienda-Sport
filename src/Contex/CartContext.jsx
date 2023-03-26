
// importamos createContex desde react para poder crear el CONTEX 
import { createContext } from "react";



// creamos una contante con el nombre del archivo igualandola a createContex()
// Listo ya creamos el CONTEX 
const CartContext = createContext()


// Creemos el Componente proveedor para poner a dispocision el CONTEX
const CartContextProvaider = () => {
    return (
        <CartContext.Provider>

            
        </CartContext.Provider>
    )
};

export default CartContextProvaider;
