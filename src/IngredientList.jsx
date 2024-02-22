import React from 'react'

import IngredientListItem from './IngredientListItem'

function IngredientList({ ingredients, setIngredients }) {
  return (
    <div className='listContainer'>
      <ul className='ingredientList'>
          {
              ingredients.map((ingredient, idx)=> (
              <IngredientListItem keyt={idx} ingredients = {ingredients} ingredient={ingredient} setIngredients={setIngredients} />
              ))
          }
      </ul>
    </div>
  )
}

export default IngredientList
