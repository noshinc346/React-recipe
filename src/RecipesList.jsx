import React from 'react'

function RecipesList({ meal }) {
  return (
    <div>
    {/* image  */}
    <img className='mealImg' src={meal.recipe.image} alt={meal.recipe.label} />
    {/* mealtype  */}
    <p>{meal.recipe.mealType}</p>
    {/* meal name */}
    <h2>{meal.recipe.label}</h2>
    {/* caloraies  */}        
    <p>Calories:{Math.round(meal.recipe.calories)}</p>
  </div>
  )
}

export default RecipesList