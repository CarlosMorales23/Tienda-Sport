import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import CircularProgress from "@mui/material/CircularProgress";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

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
    })


    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {
                // <div>{items.length > 0 && <ItemList items={items} />}</div>;

                items.length > 0 ? (
                    <ItemList items={items} />
                ) : (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center",
                            marginTop: "500 px",
                        }}
                    >
                        <CircularProgress
                            color="secondary"
                            style={{ margin: "100px" }}
                        />
                        <CircularProgress
                            color="success"
                            style={{ margin: "100px" }}
                        />
                        <CircularProgress
                            color="inherit"
                            style={{ margin: "100px" }}
                        />
                    </div>
                )
            }
        </div>
    );
};

export default ItemListContainer;
