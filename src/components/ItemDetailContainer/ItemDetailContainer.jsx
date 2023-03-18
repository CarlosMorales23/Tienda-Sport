import React from "react";

import { useParams } from "react-router-dom"

import { products } from "../../productsMock";

import ItemCount from "../ItemCount/ItemCount"

const ItemDetailContainer = () => {

    // const parametros = useParams();
    const {id} = useParams()
    // useParams sera un objeto, que en este caso retorna el id de la ruta segun el producto seleccionado, debido a como renderice en app.js al componente ItemDetail
    //

    //el id que viene desde la ruta llega como string por lo cual haya que pasarlo a numero para poder compararlo con el element.id
    const productSelected = products.find((element) => element.id === Number(id))
    //ahora producSelect tendra el objeto del producto del id correspondiente

    const onAdd= (cantidad) => {
        console.log(`Se agrego el al carrito ${cantidad} productos`)
    } 

    console.log(productSelected)
    return (
        <div>
            <h1>{productSelected.title}</h1>
            <img src={productSelected.img} alt="" />
            <ItemCount stock={productSelected.stock} onAdd={onAdd}/>
        </div>
    );
};

export default ItemDetailContainer;
