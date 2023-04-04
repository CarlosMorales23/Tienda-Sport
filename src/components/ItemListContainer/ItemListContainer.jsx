import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Cargando from "../../common/Cargando";

const ItemListContainer = () => {
    const { categoryId } = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
        const itemsCollection = collection(db, "products");

        let consulta = undefined

        if (categoryId){
            const q = query (itemsCollection, where("category", "==", categoryId))
            consulta = getDocs(q)
        }else{
            consulta = getDocs(itemsCollection)
        }

        consulta.then((res) =>{
            let products = res.docs.map ((product) =>{
                return{
                    ...product.data(),
                    id: product.id
                }
            })
            setItems(products);
        })

    },[categoryId])


    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {
                items.length > 0 ? (
                    <ItemList items={items} />
                ) : (
                    <Cargando/>
                )
            }
        </div>
    );
};

export default ItemListContainer;
