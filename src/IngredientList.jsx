import React from 'react'

import IngredientListItem from './IngredientListItem'

function IngredientList({ ingredients }) {
  return (
    <div className='listContainer'>
      <ul className='ingredientList'>
          {
              ingredients.map((ingredient, idx)=> (
              <IngredientListItem key={idx} ingredient={ingredient} />
              ))
          }
      </ul>
    </div>
  )
}

export default IngredientList
