import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({title, price = "NO tiene precio", descripcion, stock, loguin}) => {

    const saludar = () => {
        console.log("hola");
    }

    const saludar2 = (nombre) => {
        console.log("hola" + nombre);
    };

    return (
        <Card
            sx={{
                maxWidth: 350,
                maxHeigh: 200,
                border: "3px solid black",
                padding: 1,
            }}
        >
            <CardMedia
                sx={{ height: 300, borderBlockEnd: "3px solid black" }}
                image="https://res.cloudinary.com/dybsirwia/image/upload/v1678631504/remera-de-argentina-adidas-entrenamiento-azul_mpo7ox.jpg"
                title="Remera de Argentina"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <h3 className={stock ? "blue" : "red"}>{title}</h3>
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    <h3>{price}</h3>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h4>{descripcion}</h4>
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small">
                    Comprar
                </Button>
                <Button variant="contained" size="small" onClick={saludar}>
                    Saludar
                </Button>

                <Button
                    variant="contained"
                    size="small"
                    onClick={() => saludar2("juancito")}
                >
                    Saludar
                </Button>

                <Button
                    variant="contained"
                    size="small"
                    onClick={loguin}
                >
                    Loguin
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;

//Como o donde puedo achicar esa imagen, quiero tarjetas mas pequeñas???

//Usar a futuro
// {
//     stock === true ? (
//         <div>
//             <h2>{title}</h2>
//             <h3>{price}</h3>
//             <h4>{descripcion}</h4>
//             <br />
//             <br />
//         </div>
//     ) : null;
// }
