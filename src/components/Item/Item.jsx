
// import styles from "./Item.module.css"

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";


const Item = ({element}) => {
    return (
        <Card sx={{ width: 250, height: 415 }}>
            <CardMedia
                sx={{ width:140, height: 190  }}
                image={element.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {element.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {element.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {element.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/Item/${element.id}`}>
                    <Button size="small" variant="contained">
                        Ver Detalles
                    </Button>
                </Link>
            </CardActions>
        </Card>
        
    );
}
export default Item;