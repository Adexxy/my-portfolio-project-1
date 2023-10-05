import React from 'react';

const RecipeCard = ({ name, ingredients, instructions }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>Ingredients:</h3>
      <ul>{ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}</ul>
      <h3>Instructions:</h3>
      <ol>{instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}</ol>
    </div>
  );
};

export default RecipeCard;
