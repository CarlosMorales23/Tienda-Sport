import { Button } from "@mui/material";
import React, { useState } from "react";

const Form = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    // VALIDACIONES
    // name----------- minimo 15 caracteres
    // email ---------contenga un @
    // password ------ no espacios en blanco

    const handleSubmit = (e) => {
        e.preventDefault();

        // validaciones
        if (userData.name.length < 5) {
            setError(true);
            setErrorMessage("El nombre no puede ser menor a 5 caracteres");
            return;
        }

        const incluye = userData.email.includes("@");

        if (!incluye) {
            setError(true);
            setErrorMessage("El email dbe incluir un @");
            return;
        }

        const str = userData.password.trim();
        const passwordIsValid = userData.password === str;

        if (!passwordIsValid || userData.password.length < 5) {
            setError(true);
            setErrorMessage("El nombre no puede ser menor a 5 caracteres, y sin espacios");
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

            {error && <h6>{errorMessage}</h6>}
            
        </div>
    );
};

export default Form;

// como refactorizar video 1:42:00, la idea seria un objeto de errores y pasar los objetos


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
