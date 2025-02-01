// import React from 'react';
// import RecipeCard from './RecipeCard';

// const RecipeList = ({ recipes }) => {
//   return (
//     <div>
//       {recipes.map(recipe => (
//         <RecipeCard
//           key={recipe.id}
//           name={recipe.name}
//           ingredients={recipe.ingredients}
//           instructions={recipe.instructions}
//         />
//       ))}
//     </div>
//   );
// };

// export default RecipeList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/recipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <strong>{recipe.name}</strong>
            <ul>
              {recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
            <ol>
              {recipe.instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
