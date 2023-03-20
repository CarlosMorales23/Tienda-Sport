import { Button, Stack } from "@mui/material";
import React from "react";
// import styles from "./Menu.module.css"

import {Link} from "react-router-dom"

const Menu = () => {
    return (
        <Stack spacing={4} direction="row">
            <Link to= "/" variant="contained">Todas</Link>
            <Link to="/category/Futbol" variant="contained">Futbol</Link>
            <Link to="/category/Beisbol" variant="contained">Beisbol</Link>
            <Link to="/category/Basket" variant="contained">Basket</Link>
        </Stack>
    );
};

export default Menu;

