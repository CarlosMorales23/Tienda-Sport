import React, { useEffect, useState } from "react";

import axios from "axios";
import { Padding } from "@mui/icons-material";
import { padding } from "@mui/system";

const ProductsBack2 = () => {

    const [products, setProducts ] = useState ([])

    useEffect ( () => {
        //Solicitud a la API
        const data = axios.get("http://localhost:5000/products")
            
        data
            .then ((res) => setProducts(res.data))
            // .then((res) => console.log (res))
            //min 30:24 se hizo la petición a axios, se hizo un then a la res, y a mi me arrojo el array de 6 productos. AL profe los datos del backend. Porque la diferencia?

    }, [])

    console.log(products)


    return (
        <div>
            <h1>Products desde el Back2</h1>

            <div style={{width: "100%", display: "flex", gap: "30px", justifyContent: "space-around", alignItems:"center", minHeight: "90 vh", padding: "30px" }}>
                {products.map((e) => {
                    return (
                        <div
                            style={{
                                width: "200px",
                                height: "300px",
                                border: "2px solid black",
                                textAlign: "center",
                            }}
                        >
                            <h3>{e.title}</h3>
                            <img
                                src={e.img}
                                alt=""
                                style={{ width: "100%", objectFit: "cover" }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductsBack2;
