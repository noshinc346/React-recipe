import React from 'react'

import IngredientListItem from './IngredientListItem'

function IngredientList({ ingredients, setIngredients }) {

  // Code to show the list div once user inputs.....----
        // const [showDiv, setShowDiv] = useState(false);
        // const [inputText, setInputText] = useState('');

        // const handleInputChange = (text) => {
        //   setInputText(text);
        //   setShowDiv(text.trim() !== '');
        // };

  return (
        // <div>
        //   <NewIngredientForm onInputChange={handleInputChange} />
          
          // {showDiv && (
  <div className='listContainer'>
    <ul className='ingredientList'>
        {
          ingredients.map((ingredient, idx)=> (
          <IngredientListItem keyt={idx} 
                              ingredients = {ingredients} 
                              ingredient={ingredient} 
                              setIngredients={setIngredients} 
          />
          ))
        }
    </ul>
  </div>
        //   )}
        // </div>
  )
}

export default IngredientList
