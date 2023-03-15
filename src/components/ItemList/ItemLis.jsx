import React from "react";
import Item from "../Item/Item";

const ItemLis = ({items}) => {
    return (
        <div style={{
            backgroundColor: "navy",
            display: "flex",
            width: "100%",
            minHeight: "100vh",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
        }
        }>
            {
                items.map( (element) =>{

                    return <Item key={element.id} element={element}/>
                })
            }
        </div>
    );
};

export default ItemLis;


// 1. Item. La info que llevara la tarjeta
// 2. ItemList El agrupador de los item. Va dentro de la carpeta ItemListContaine. 
// 3. async mock 