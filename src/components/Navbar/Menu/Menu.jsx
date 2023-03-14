import { Button, Stack } from "@mui/material";
import React from "react";
// import styles from "./Menu.module.css"

const Menu = () => {
    return (
        <Stack spacing={4} direction="row">
            <Button variant="contained">Futbol</Button>
            <Button variant="contained">Beisbol</Button>
            <Button variant="contained">Basket</Button>
        </Stack>
    );
};

export default Menu;

