// import { Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import { BounceLoader } from "react-spinners";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';



const ItemListContainer = () => {
    const { categoryId } = useParams();

    const [items, setItems] = useState([]);

    const productsFiltrados = products.filter(
        (elemento) => elemento.category === categoryId
    );

    useEffect(() => {
        const productList = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(categoryId ? productsFiltrados : products);
            }, 1500);

            // reject("No tienes autorización")
        });

        productList
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryId]);

    // if(items.length===0){
    //     return <h1>Cargando........!!!!!</h1>
    // }

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            {
                // <div>{items.length > 0 && <ItemList items={items} />}</div>;

                items.length > 0 ? (
                    <ItemList items={items} />
                ) : (
                    // <h1>Cargando........!!!!!</h1>

                    <div style={{display:"flex", justifyContent:"center", alignContent:"center", marginTop:"500 px"}}>
                        <CircularProgress color="secondary" style={{margin:"100px"}}/>
                        <CircularProgress color="success"  style={{margin:"100px"}}/>
                        <CircularProgress color="inherit"  style={{margin:"100px"}}/>
                    </div>
                )
            }
        </div>
    );
};

export default ItemListContainer;
