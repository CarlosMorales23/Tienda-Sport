
import React, { useEffect, useState } from "react";
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
        <ul style={{listStyleType: "none"}}>
            {categoryList.map((category) => {
                return (
                    <Link
                        key={category.id}
                        to={category.path}
                        style={{
                            margin: "20px",
                            border: "1px solid blue",
                            borderRadius: "5px",
                            backgroundColor: "navy",
                            color: "white",
                            padding: "12px",
                            textDecoration: "none"
                        }}
                    >
                        {category.title}
                    </Link>
                );
            })}
        </ul>
    );
};

export default Menu;
