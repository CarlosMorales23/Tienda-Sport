
// import styles from "./Item.module.css"

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = ({element}) => {
    return (
        <Card sx={{ width: 250, height: 320 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={element.img}
                title="green iguana"
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
                <Button size="small" variant="contained">Share</Button>
                <Button size="small" variant="contained">Learn More</Button>
            </CardActions>
        </Card>
    );
}
export default Item;
