// import { Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { products } from "../../productsMock";
import ItemLis from "../ItemList/ItemLis";



const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect ( ()=>{
        const productList = new Promise((resolve, reject)=>{
            resolve (products)
            // reject("No tienes autorización")
        })

        productList
        .then ((res)=>{setItems(res)})
        .catch ((error) =>{console.log(error)})
    }, [])

    console.log(items)


    return(
            <div>
                <ItemLis items={items}/>
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