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

        let existe = isInCart(producto.id)

        if(existe){
            
            let newCart = cart.map((elemento)=>{
                if(elemento.id === producto.id){
                    return {
                        ...elemento,
                        quantity: elemento.quantity + producto.quantity
                    }
                }else{
                    return elemento
                }
            })

            setCart(newCart)



        }else{
            setCart([...cart, producto]);
        }

        
    }



    const isInCart = (id) =>{
        return cart.some(element => element.id === id)
    }
    // AGREGAR
    // ELIMINAR
    // CONTAR
    // TOTAL DEL PRECIO DEL CARRITO
    
    const clearCart = () =>{
        setCart([])
    }


    const getTotalQuantity = () =>{
        const total = cart.reduce((acc, elemento)=>{
            return acc + elemento.quantity;
        }, 0)

        return total
    }

    const getTotalPrice = () => {
        let precioTotal = cart.reduce((acc, elemento)=>{
            return acc + elemento.quantity * elemento.price
        }, 0)

        return precioTotal
    }
    


    let data ={
        cart,
        agregarAlCarrito,
        clearCart,
        getTotalQuantity,
        getTotalPrice
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