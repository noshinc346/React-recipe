import React from 'react'

function IngredientListItem({ ingredient }) {
return (
    <li className='ingredientListItem'>
        <p>{ingredient}</p>
    </li>
)
}

export default IngredientListItem