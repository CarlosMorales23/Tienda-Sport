import React, { useState } from "react";

const Form = () => {

    const [name, setName] = useState("")

    return (
        <div>
            <form action="">
                <input type="text" placeholder="ingrese su nombre" onChange={(event)=>console.log(event)} name="name"/>
                <br />
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;
