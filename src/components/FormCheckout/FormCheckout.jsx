import { Button } from "@mui/material";
import React, { useState } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        nameAgain: "",
        emailAgain: "",
        phoneAgain: "",
    });


    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    console.log(userData);

    let total = getTotalPrice();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userData.name !== userData.nameAgain) {
            setError(true);
            setErrorMessage(
                "Los campos Nombres son diferentes, deben ser iguales"
            );
            return;
        }

        if (userData.apellido !== userData.apellidoAgain) {
            setError(true);
            setErrorMessage(
                "Los campos Apellidos son diferentes, deben ser iguales"
            );
            return;
        }

        
        if (userData.email !== userData.emailAgain) {
            setError(true);
            setErrorMessage(
                "Los campos Email son diferentes, deben ser iguales"
            );
            return;
        }


        if (userData.phone !== userData.phoneAgain) {
            setError(true);
            setErrorMessage(
                "Los campos Telefono son diferentes, deben ser iguales"
            );
            return;
        }

        let order = {
            buyer: userData,
            items: cart,
            total,
        };

        let orderCollection = collection(db, "orders");
        addDoc(orderCollection, order)
            .then((res) => {
                setOrderId(res.id);
                clearCart();
            })
            .catch((err) => console.log(err));

        cart.map((product) => {
            let refDoc = doc(db, "products", product.id);
            updateDoc(refDoc, { stock: product.stock - product.quantity });
            return product;
        });
    };

    //  Al ingresar su NOMBRE, APELLIDO, TELEFONO e E-MAIL (ingresándolo dos veces para
    // corroborar que sea correcto), debe activarse el botón de ‘realizar compra’.

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={userData.name}
                    name="name"
                    onChange={handleChange}
                />
                <br />
                <br />

                <input
                    type="text"
                    placeholder="Escribe de nuevo tu nombre"
                    value={userData.nameAgain}
                    name="nameAgain"
                    onChange={handleChange}
                />
                <br />
                <br />

                <input
                    type="text"
                    placeholder="Apellido"
                    value={userData.apellido}
                    name="apellido"
                    onChange={handleChange}
                />
                <br />
                <br />

                <input
                    type="text"
                    placeholder="Escribe de nuevo tu apellido"
                    value={userData.apellidoAgain}
                    name="apellidoAgain"
                    onChange={handleChange}
                />
                <br />
                <br />

                <input
                    type="email"
                    placeholder="Email"
                    value={userData.email}
                    name="email"
                    onChange={handleChange}
                />
                <br />
                <br />

                <input
                    type="email"
                    placeholder="Escribe de nuevo tu Email"
                    value={userData.emailAgain}
                    name="emailAgain"
                    onChange={handleChange}
                />
                <br />
                <br />

                <input
                    type="number"
                    placeholder="Telefono"
                    value={userData.phone}
                    name="phone"
                    onChange={handleChange}
                />
                <br />
                <br />

                <input
                    type="number"
                    placeholder="Escribe de nuevo tu Telefono"
                    value={userData.phoneAgain}
                    name="phoneAgain"
                    onChange={handleChange}
                />
                <br />
                <br />

                <Button type="submit" variant="contained">
                    Comprar
                </Button>
            </form>

            {error && <h6>{errorMessage}</h6>}
        </div>
    );
};

export default FormCheckout;
