import { Button, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";

const ItemListContainer = ({greeting}) => {

    const [nombre, setNombre] = useState ("Pepito")
    
    const cambiarNombre = ()=>{
        setNombre("Maria")
    }


    return (
        <div>
            <h1>Buenos dias {nombre}</h1>
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={cambiarNombre}>
                    Cambiar Nombre
                </Button>
            </Stack>
        </div>
    );
};

export default ItemListContainer;
