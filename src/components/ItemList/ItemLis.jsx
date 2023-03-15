import React from "react";

const ItemLis = ({items}) => {
    return (
        <div>
            {
                items.map( (element) =>{

                    return <div key={element.id}>
                        <img src={element.img} alt="" width={200} />
                        <h2>{element.title}</h2>
                        <h3>{element.price}</h3>
                        <br />
                    </div>
                })
            }
        </div>
    );
};

export default ItemLis;
