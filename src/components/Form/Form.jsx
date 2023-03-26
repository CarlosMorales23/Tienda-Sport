import { Button } from "@mui/material";
import React, { useState } from "react";

const Form = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");

    // const handleChangeNombre = (e) => {
    //     setName(e.target.value);
    // };

    // const handleChangeEmail = (e) => {
    //     setEmail(e.target.value);
    // };

    // console.log(name);
    // console.log(email);

    // const handleChange2 = (e) => {
    //     setUserData({ ...userData, email: e.target.value });
    // };

    // const handleChange3 = (e) => {
    //     setUserData({ ...userData, password: e.target.value });
    // };

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    // name----------- minimo 15 caracteres
    // email ---------contenga un @
    // password ------ no espacios en blanco

    const handleSubmit = (e) => {
        e.preventDefault();

        // validaciones
        if (userData.name.length < 5) {
            console.log("Nombre no valido");
            return;
        }

        const incluye = userData.email.includes("@");
        if (!incluye) {
            console.log("email no valido");
            return;
        }

        const str = userData.password.trim()
        const passwordIsValid= userData.password === str
        if(!passwordIsValid  || userData.password.length < 5 ){
            console.log("la contraseña no debe tener espacion en blanco y minimo 5 carcteres")
        }
        // instrucciones
        console.log(userData);
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="ingrese su nombre"
                    onChange={handleChange}
                    // (e) => handleChange (e)
                    name="name"
                />
                <br />
                <br />

                <input
                    type="text"
                    placeholder="ingrese su email"
                    name="email"
                    onChange={handleChange}
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="ingrese su contraseña"
                    name="password"
                    onChange={handleChange}
                />
                <br />
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Form;
