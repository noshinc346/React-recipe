import React, { useState } from 'react'

function IngredientListItem({ keyt, ingredient, ingredients, setIngredients }) {
    // console.log(keyt)

    // I want to be able to remove items from my list...but my list stateis in App.js
    // const [theList, setTheList] = useState

    // const handleRemoveItem = (index) => {
    //     const updatedItems = [...ingredients];
    //     updatedItems.splice(updatedItems[index + 1], 1);
    //     setIngredients(updatedItems);
    //     console.log(ingredients)
    //   };

return (
    <li className='ingredientListItem'>
        <p className='ingredientName'>{ingredient}</p>
        {/* <p>{keyt}</p> */}
        {/* <button className='removeIngredient' 
        onClick={() => handleRemoveItem(keyt)}
        >x</button> */}
    </li>
)
}

export default IngredientListItem