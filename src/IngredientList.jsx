import React from 'react'

import IngredientListItem from './IngredientListItem'

function IngredientList({ ingredients }) {
  return (
    <ul className='ingredientList'>
        {
            ingredients.map((ingredient, idx)=> (
            <IngredientListItem key={idx} ingredient={ingredient} />
            ))
        }
    </ul>
  )
}

export default IngredientList
