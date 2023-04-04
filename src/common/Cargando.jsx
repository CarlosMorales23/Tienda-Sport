import { CircularProgress } from "@mui/material";
import React from "react";

const Cargando = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                marginTop: "500 px",
            }}
        >
            <CircularProgress color="secondary" style={{ margin: "100px" }} />
            <CircularProgress color="success" style={{ margin: "100px" }} />
            <CircularProgress color="inherit" style={{ margin: "100px" }} />
        </div>
    );
};

export default Cargando;
