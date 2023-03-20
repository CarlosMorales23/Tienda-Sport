import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./CartWidget.module.css";

import { Link } from "react-router-dom";

const CartWidget = () => {

    

    return (
        <div>
            <Link to="/cart" style={{ textDecoration: "none" }}>
                <div className={styles.containerCartwidget}>
                    <div className={styles.contadorContainer}>
                        {/* classname="bubble-counter" */}
                        <h3
                            className={styles.contador}
                            style={{ textDecoration: "none" }}
                        >
                            0
                        </h3>
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
