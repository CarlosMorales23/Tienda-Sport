import { Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";

const ItemListContainer = ({greeting}) => {

    const [nombre, setNombre] = useState ("Pepito")
    const [contador, setContador] = useState(0)
    
    const cambiarNombreMaria = ()=>{
        setNombre("Maria")
    }

    const cambiarNombrePepito = () => {
        setNombre("Pepito");
    };

    useEffect ( ()=>{
        console.log("Me ejecute una soloa vez")
    },[])

    useEffect(() => {
        console.log("Me ejecute cada vez que cambia contador");
    }, [contador]);



    return (
        <div>
            <h1>Buenos dias {nombre}</h1>
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={cambiarNombreMaria}>
                    Cambiar a Maria
                </Button>
                <Button variant="contained" onClick={cambiarNombrePepito}>
                    Cambiar a Pepito
                </Button>
            </Stack>
        </div>
    );
};

export default ItemListContainer;
