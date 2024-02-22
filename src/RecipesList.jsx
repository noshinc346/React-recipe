import React from 'react'

function RecipesList({ meal }) {
  return (
    <div className='meal'>
        {/* image  */}
        <img className='mealImg' src={meal.recipe.image} alt={meal.recipe.label} />
        {/* meal name */}
        <h2>{meal.recipe.label}</h2>
        {/* mealtype  */}
        <p>{meal.recipe.mealType}</p>
        {/* caloraies  */}        
        <p>Calories:{Math.round(meal.recipe.calories)}</p>
    </div>
  )
}

export default RecipesList