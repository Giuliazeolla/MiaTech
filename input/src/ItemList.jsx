import React from "react";

const ItemList = ({ items }) => {


    return (
        <>
        <ul>
            {
                items.map((item, index) => (
                <li key={`items-${index}`}>{item}</li>
               ))
            }
        </ul>
        </>
    )
}

export default ItemList;