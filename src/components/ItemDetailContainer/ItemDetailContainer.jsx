import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { CartContext } from "../../Contex/CartContext";

import { products } from "../../productsMock";

import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
    // const parametros = useParams();
    const { id } = useParams();
    // useParams sera un objeto, que en este caso retorna el id de la ruta segun el producto seleccionado, debido a como renderice en app.js al componente ItemDetail
    //

    const {agregarAlCarrito, getQuantityById} = useContext (CartContext)

    //el id que viene desde la ruta llega como string por lo cual haya que pasarlo a numero para poder compararlo con el element.id
    const productSelected = products.find(
        (element) => element.id === Number(id)
    );
    //ahora producSelect tendra el objeto del producto del id correspondiente

    const onAdd = (cantidad) => {
        let producto= {
            ...productSelected, 
            quantity: cantidad
        }
        agregarAlCarrito(producto)
    };

    let quantity = getQuantityById(Number(id))
    console.log(quantity)

    return (
        <div>
            <h1>{productSelected.title}</h1>
            <img src={productSelected.img} alt="" style={{ width: 200 }} />
            <ItemCount stock={productSelected.stock} onAdd={onAdd} initial={quantity}/>
        </div>
    );
};

export default ItemDetailContainer;
