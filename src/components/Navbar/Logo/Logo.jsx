import React from "react";
import styles from "./Logo.module.css"
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <img
                className={styles.logo}
                src="https://res.cloudinary.com/dybsirwia/image/upload/v1677811224/E-commerce/i_lr7dus.png"
                height={100}
                alt="Logo"
            />
        </Link>
    );
};

export default Logo;
