import React, { useState } from "react";

const Hora = () => {
    const [hora, setHora] = useState("");

    const horaDeCompra = () => {
        const h = new Date();

        const hours = h.getHours() < 10 ? 0 : "";

        const minutes = h.getMinutes() < 10 ? 0 : "";

        const secs = h.getSeconds() < 10 ? 0 : "";

        let horaActual = `${hours}: ${minutes}:${secs}`;

        setHora(horaActual);
    };

    return (
        <div>
            <h4>{horaDeCompra()}</h4>
            
        </div>
    );
};

export default Hora;
