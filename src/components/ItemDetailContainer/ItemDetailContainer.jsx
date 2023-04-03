import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { CartContext } from "../../Contex/CartContext";

import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import Swal from "sweetalert2";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();

    const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

    const [productSelected, setProductSelected] = useState({});

    useEffect(() => {
        const itemCollection = collection(db, "products")
        const ref= doc(itemCollection, id)
        getDoc(ref)
            .then(res => {
                setProductSelected({
                    ...res.data(),
                    id: res.id
                })
            })
    }, [id]);

    const onAdd = (cantidad) => {
        let producto = {
            ...productSelected,
            quantity: cantidad,
        };
        agregarAlCarrito(producto);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Estas a un solo paso de que sea tuya!!! vamos a Pagar",
            showConfirmButton: false,
            timer: 2000,
        });
    };

    let quantity = getQuantityById(Number(id));
    console.log(quantity);

    return (
        <div>
            <ItemDetail productSelected={productSelected} onAdd={onAdd} quantity={quantity}></ItemDetail>
        </div>
    );
};

export default ItemDetailContainer;
