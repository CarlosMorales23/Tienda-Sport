import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

const ItemCount = () => {

    const [contador, setContador] = useState (0)

    const sumar = () => {
        setContador (contador +1)
    }

    const restar = () => {
        setContador (contador -1)
    }

    const setCero = () => {
        setContador (0)
    }

    return (
        <div>
            <h1>Estoy en el Item Count</h1>
            <h2>{contador}</h2>
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={sumar}>Sumar</Button>
                <Button variant="contained" onClick={restar}>Restar</Button>
                <Button variant="contained" onClick={setCero}>Borrar</Button>
            </Stack>
        </div>
    );
};

export default ItemCount;
