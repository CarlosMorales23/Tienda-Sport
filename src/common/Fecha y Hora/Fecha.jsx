import React, { useState } from "react";

const Fecha = () => {
    const [fecha, setFecha] = useState("");

    const fechaDeCompra = () => {
        const hoy = new Date();

        const dia = hoy.getDate();

        const mes = hoy.getMonth() + 1;

        const anio = hoy.getFullYear();

        const fechaActual = `${dia}-${mes}-${anio}`;

        setFecha(fechaActual);
    };

    return (
        <div>
            <h4>{fechaDeCompra()}</h4>
        </div>
    );
};

export default Fecha;
