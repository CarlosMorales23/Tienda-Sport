import React from "react";

import { Button } from "@mui/material";

import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>error 404: Not Found</h1>

            <Link to="/">
                <Button variant="contained"> Retorna a la pagina pricipal</Button>
                
            </Link>
        </div>
    );
};

export default NotFound;
