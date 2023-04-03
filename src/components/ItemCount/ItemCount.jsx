import React, { useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

const ItemCount = ({stock, initial=1, onAdd}) => {
    const [contador, setContador] = useState(initial);

    useEffect(()=>{
        setContador(initial);
    }, [initial])

    const sumar = () => {
        if (contador < stock){
            setContador(contador + 1);
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    return (
        <div>
            <h2>{contador}</h2>
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={sumar}>
                    Sumar
                </Button>
                <Button variant="contained" onClick={restar}>
                    Restar
                </Button>
                <Button variant="contained" onClick={()=>onAdd(contador)}>
                    Agregar
                </Button>
            </Stack>
        </div>
    );
};

export default ItemCount;
