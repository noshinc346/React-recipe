import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'

import IngredientList from './IngredientList';
import NewIngredientForm from './NewIngredientForm';
import RecipesList from './RecipesList';



function App() {

  // State of list of Ingredients in Fridge ----------------------------------------------------------------------------
  const [ingredients, setIngredients] = useState([])
  // State of list of Recipes fetched from API ----------------------------------------------------------------------------
  const [meals, setMeals] = useState([])

  // API FETCH RECIPE ----------------------------------------------------------------------------
  
  const fetchRecipes = async () => {
    const ingredientList = ingredients.join("+")
    const res = await axios(`https://api.edamam.com/search?q=${ingredientList}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`)
    setMeals(res.data.hits)
  }

  console.log(process.env.REACT_APP_APP_KEY)

  // console.log(ingredients)

  // useEffect(() => {
  //   fetchRecipes()
  // }, [])
  // ---------------------------------------------------------------------------------------------------------------

  // DISPLAY ----------------------------------------------------------------------------
  return (
    <div className="App">
      <div className='header'>
        <h1 className='title'>What's in Your Fridge<em className='questionmark'>?</em></h1>
      </div>
      
      
      <NewIngredientForm setIngredients={setIngredients}/>

      <IngredientList ingredients={ingredients} setIngredients={setIngredients}/>

      <button className="submitRecipe" onClick={fetchRecipes}>Submit</button>

      {meals.length > 0 && (
        <div className='recipes-container'>
          {meals.map((meal, idx) => (
            <RecipesList key={idx} meal={meal}/>
          ))}
        </div>
      )}

    </div>
  );
}

export default App;



