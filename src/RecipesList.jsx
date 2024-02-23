import React from 'react'
import { Link } from 'react-router-dom'

function RecipesList({ meal }) {
    
  return (
    <div className='mealbox' 
    onClick={(() => window.open(`${meal.recipe.url}`, '_blank')
    )} >
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
    </div>
  )
}

export default RecipesList