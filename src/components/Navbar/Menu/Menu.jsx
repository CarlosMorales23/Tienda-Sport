import { Button, Stack } from "@mui/material";
import React from "react";
// import styles from "./Menu.module.css"

import {Link} from "react-router-dom"

const Menu = () => {
    return (
        <Stack spacing={4} direction="row">
            <Link to="/">
                <Button variant="contained">Todas</Button>
            </Link>
            <Link to="/category/Futbol">
                <Button variant="contained">Futbol</Button>
            </Link>
            <Link to="/category/Beisbol">
                <Button variant="contained">Beisbol</Button>
            </Link>
            <Link to="/category/Basket">
                <Button variant="contained">Basket</Button>
            </Link>
        </Stack>
    );
};

export default Menu;

