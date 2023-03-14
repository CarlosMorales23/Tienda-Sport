import React from "react";
import styles from "./Logo.module.css"

const Logo = () => {
    return (
        <img className={styles.logo}
            src="https://res.cloudinary.com/dybsirwia/image/upload/v1677811224/E-commerce/i_lr7dus.png" height={100}
            alt="Logo"
        />
    );
};

export default Logo;
