// import { Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";



const ItemListContainer = () => {

    const {categoryId} = useParams();

    const [items, setItems] = useState([])

    const productsFiltrados = products.filter( (elemento)=> elemento.category === categoryId )

    useEffect ( ()=>{

        const productsFiltrados = products.filter(
            (elemento) => elemento.category === categoryId
        );
        
        const productList = new Promise((resolve, reject)=>{
            resolve (categoryId ? productsFiltrados : products)
            // reject("No tienes autorización")
        })

        productList
        .then ((res)=>{setItems(res)})
        .catch ((error) =>{console.log(error)})
    }, [categoryId])


    return(
            <div>
                <ItemList items={items}/>
            </div>
    )


}


export default ItemListContainer;