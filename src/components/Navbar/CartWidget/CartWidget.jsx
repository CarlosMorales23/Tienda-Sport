import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
    return (
        <div className={styles.containerCartwidget}>
            <div className={styles.contadorContainer}>
                <h3 className={styles.contador}>1</h3>
            </div>
            <div className={styles.carrito}>
                <ShoppingCartIcon sx={{ fontSize:40}}/>
            </div>
        </div>
    );
};

export default CartWidget;
