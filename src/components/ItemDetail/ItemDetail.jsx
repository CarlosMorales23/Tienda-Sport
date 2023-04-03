import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({productSelected, onAdd, quantity}) => {
    return (
        <div>
            <h1>{productSelected.title}</h1>
            <img src={productSelected.img} alt="" style={{ width: 200 }} />
            <ItemCount
                stock={productSelected.stock}
                onAdd={onAdd}
                initial={quantity}
            />
        </div>
    );
};

export default ItemDetail;
