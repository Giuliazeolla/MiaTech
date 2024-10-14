import React from "react";

const List = () => {
    const ingredients = ["patate", "carote", "zucchine", "pane"];


    return (
        <>
        <ul>
            {
                ingredients.map((ingredient, index) => (
                <li key={`ingredients-${index}`}>{ingredient}</li>
               ))
            }
        </ul>
        </>
    )
}

export default List;