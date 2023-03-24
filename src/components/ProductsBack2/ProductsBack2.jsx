import React, { useEffect, useState } from "react";

import axios from "axios";

const ProductsBack2 = () => {
    const [products, setProducts] = useState([]);
    const [isCreated, setIsCreated] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        setIsCreated(false);
        //Solicitud a la API
        const data = axios.get("http://localhost:5000/products");

        data.then((res) => setProducts(res.data));
        // .then((res) => console.log (res))
        //min 30:24 se hizo la petición a axios, se hizo un then a la res, y a mi me arrojo el array de 6 productos. AL profe los datos del backend. Porque la diferencia?
    }, [isCreated, isUpdate, setIsUpdate]);

    console.log(products);

    const newProduct = {
        title: "Nuevo Producto",
        img: "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-boca-adidas-alternativa-blanca-100020gl4171001-1.jpg",
    };

    const addproduct = (obj) => {
        const create = axios.post("http://localhost:5000/products", newProduct);
        create
            .then((res) => {
                console.log(res);
                setIsCreated(true)
            })
            .catch((err) => console.log(err));
        //Manejar la promesa con axios no es necesario para añadir el producto, pero se puede ver cual fue el resultado de la promesa
    };

    const updateProduct = (id) => {
        const update = axios.patch(`http://localhost:5000/products/${id}`, {
            title: "Boca Juniors",
        });
        update.then((res) => {
            console.log(res);
            setIsUpdate(true)
        }).catch((err) => console.log(err));
        //Manejar la promesa con axios no es necesario para añadir el producto, pero se puede ver cual fue el resultado de la promesa
    };

    const deleteProduct = (id) => {
        const del = axios.delete(`http://localhost:5000/products/${id}`, {
            title: "Boca Juniors",
        });
        del.then((res) => console.log(res)).catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>Products desde el Back2</h1>

            <div
                style={{
                    width: "100%",
                    display: "flex",
                    gap: "30px",
                    justifyContent: "space-around",
                    alignItems: "center",
                    minHeight: "90 vh",
                    padding: "30px",
                }}
            >
                {products.map((e) => {
                    return (
                        <div
                            style={{
                                width: "200px",
                                height: "300px",
                                border: "2px solid black",
                                textAlign: "center",
                            }}
                            key={e.id}
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
            {/* AGREGAR PRODUCTO */}
            <button onClick={addproduct}>Crear producto</button>

            <br />
            <br />
            {/* MODIFICA RUN PRODUCTO */}
            <button onClick={() => updateProduct("Crrozv9")}>
                Modificar Prodcuto
            </button>

            <br />
            <br />

            <button onClick={() => deleteProduct("--Fz-_w")}>
                Eliminar Prodcuto
            </button>
            {/* <div
                style={{
                    backgroundColor: "steelblue",
                    width: "100%",
                    padding: "30px",
                    height: "100px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginTop: "50px"
                }}
            >
                <form
                    action=""
                    style={{
                        width: "70%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                    }}
                >
                    <input
                        type="text"
                        name="title"
                        placeholder="ingresa el nombre del producto"
                        style={{ width: "70%", height: "40px" }}
                    />
                    <input
                        type="text"
                        name="imagen"
                        placeholder="ingresa la URL de la imagen"
                        style={{ width: "70%", height: "40px" }}
                    />

                    <button>Crear Producto</button>
                </form>
            </div> */}
        </div>
    );
};

export default ProductsBack2;
