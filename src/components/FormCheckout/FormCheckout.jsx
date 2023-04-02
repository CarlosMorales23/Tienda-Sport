import { Button } from "@mui/material";
import React, { useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FormCheckout = ({cart, getTotalPrice, setOrderId, clearCart}) => {

    const [userData, setUserData] = useState({
        name:"",
        email:"",
        phone:""
    })

    console.log(userData)



    let total= getTotalPrice()

    const handleSubmit = (e) =>{
        e.preventDefault()

        let order = {
            buyer: userData,
            items: cart,
            total
        }

        let orderCollection = collection( db, "orders")
        addDoc(orderCollection, order)
            .then(res => {
                setOrderId(res.id);
                clearCart()
            })
            .catch(err => console.log(err))
        

    }



    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={userData.name}
                    onChange={(e) =>
                        setUserData({ ...userData, name: e.target.value })
                    }
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="Email"
                    value={userData.email}
                    onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                    }
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="Telefono"
                    value={userData.phone}
                    onChange={(e) =>
                        setUserData({ ...userData, phone: e.target.value })
                    }
                />
                <Button type="submit" variant="contained">
                    Comprar
                </Button>
            </form>
        </div>
    );
};

export default FormCheckout;
