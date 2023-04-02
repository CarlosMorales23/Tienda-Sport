import { Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
// import styles from "./Menu.module.css"
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const Menu = () => {
    const [categoryList, setcategoryList] = useState([]);

    useEffect(() => {
        const itemsCollection = collection(db, "categories");
        getDocs(itemsCollection).then((res) => {
            let arrayCategories = res.docs.map((category) => {
                return {
                    ...category.data(),
                    id: category.id,
                };
            });
            setcategoryList(arrayCategories);
        });
    }, []);

    return (
        <ul>
            {categoryList.map((category) => {
                return (
                    <Link
                        key={category.id}
                        to={category.path}
                        style={{ margin: "20px" }}
                    >
                        {category.title}
                    </Link>
                );
            })}
        </ul>
    );
};

export default Menu;
