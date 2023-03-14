import { Box } from "@mui/material";
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
// import styles from "./NavbarPres.module.css"


const NavbarPres = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: 100,
                border: "2px solid black",
                backgroundColor: "skyblue",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 3,
            }}
        >
            <Logo />
            <Menu />
            <CartWidget/>

        </Box>
    );
};

export default NavbarPres;

            // <Grid container spacing={12}>
            //     <Grid item xs={4} md={4}>
            //         <Logo />
            //     </Grid>
            //     <Grid item xs={4} md={4}>
            //         <Menu />
            //     </Grid>
            //     <Grid item xs={4} md={4}>
            //         <CartWidget />
            //     </Grid>
            // </Grid>;


