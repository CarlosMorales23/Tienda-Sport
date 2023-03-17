import React from "react";

import { useParams } from "react-router-dom"

import { products } from "../../productsMock";

const ItemDetailContainer = () => {

    const {id} = useParams()

    const productSelected = products.find((element) => element.id === Number(id))

    console.log(productSelected)
    return (
        <div>
            <h1>Estoy en el detalle del producto</h1>
        </div>
    );
};

export default ItemDetailContainer;
