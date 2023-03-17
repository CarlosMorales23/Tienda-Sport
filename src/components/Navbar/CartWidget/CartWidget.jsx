import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./CartWidget.module.css";

import { Link } from "react-router-dom";

const CartWidget = () => {

    

    return (
        <div>
            <Link to="/cart">
                <div className={styles.containerCartwidget}>
                    <div className={styles.contadorContainer}>
                        <h3 className={styles.contador}>0</h3>
                    </div>
                    <div className={styles.carrito}>
                        <ShoppingCartIcon sx={{ fontSize: 40 }} />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CartWidget;
