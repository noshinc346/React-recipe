import { useState } from 'react'

function NewIngredientForm({ setIngredients }) {

    const [newIngredient, setNewIngredient] = useState("")
    const [sumbit, setSubmit] = useState({})
    
    function handleChange(e) {
        setNewIngredient(e.target.value)
    }

    function handleAddIngredient(e) {
        e.preventDefault()

        setIngredients((prevNewIngredient) => ([
            ...prevNewIngredient, newIngredient
        ]));

        setNewIngredient("")
    }

    return (
        <form className='newIngredientForm' 
            onSubmit={handleAddIngredient}
        >
          <input 
            id="ingredient" 
            type="search" 
            value={newIngredient}
            onChange={handleChange}
          />
          <button type="submit">ADD</button>
        </form>
      )
}

// onClick={fetchRecipes} 

export default NewIngredientForm