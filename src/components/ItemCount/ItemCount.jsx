import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";


const ItemCount = (stock, initial, onAdd) => {
    const [contador, setContador] = useState(0);

    const sumar = () => {
        
        if (contador < stock){
            setContador(contador + 1);
        }
        
    };

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    return (
        <div>
            <h1>Estoy en el Item Count</h1>
            <h2>{contador}</h2>
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={sumar}>
                    Sumar
                </Button>
                <Button variant="contained" onClick={restar}>
                    Restar
                </Button>
                <Button variant="contained" onClick={onAdd}>
                    Agregar
                </Button>
            </Stack>
        </div>
    );
};


export default ItemCount;
