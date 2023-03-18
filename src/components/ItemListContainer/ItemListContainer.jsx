// import { Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";



const ItemListContainer = () => {

    const {categoryName} = useParams();

    const [items, setItems] = useState([])

    const productsFiltrados = products.filter( (elemento)=> elemento.category === categoryName )

    useEffect ( ()=>{
        const productList = new Promise((resolve, reject)=>{
            resolve (categoryName ? productsFiltrados : products)
            // reject("No tienes autorización")
        })

        productList
        .then ((res)=>{setItems(res)})
        .catch ((error) =>{console.log(error)})
    }, [categoryName])

    console.log(items)


    return(
            <div>
                <ItemList items={items}/>
            </div>
    )


}


export default ItemListContainer;













// const ItemListContainer = ({ greeting }) => {
//     const [nombre, setNombre] = useState("Pepito");
//     const [userName, setUserName] = useState("Juancito");

//     const cambiarNombreMaria = () => {
//         setNombre("Maria");
//     };

//     const cambiarNombrePepito = () => {
//         setNombre("Pepito");
//     };

//     useEffect(() => {
//         console.log("Me ejecute una soloa vez");
//     }, []);

//     useEffect (() => {
//         const productList = new Promise ((resolve, reject) =>{
//             resolve("pepito")
//             reject ("La solicitud no pudo ser completada")
//         });

//         productList
//         .then( (res) =>{ setUserName(res)})
//         .catch( (error) => {console.log(error)})
//     }, [])

//     console.log(userName)

//     return (
//         <div>
//             <h1>Buenos dias {nombre}</h1>
//             <Stack spacing={2} direction="row">
//                 <Button variant="contained" onClick={cambiarNombreMaria}>
//                     Cambiar a Maria
//                 </Button>
//                 <Button variant="contained" onClick={cambiarNombrePepito}>
//                     Cambiar a Pepito
//                 </Button>
//             </Stack>
//         </div>
//     );
// };




  // useEffect(() => {
    //     console.log("Me ejecute cada vez que cambia contador");
    // }, [contador]);