import React, { useState } from 'react';

// const MealPlanner = () => {
//   const [mealPlan, setMealPlan] = useState([]);

//   const handleMealPlanChange = (day, recipe) => {
//     const updatedPlan = [...mealPlan];
//     updatedPlan[day] = recipe;
//     setMealPlan(updatedPlan);
//   };

//   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//   return (
//     <div>
//       <h2>Meal Planner</h2>
//       <div>
//         {daysOfWeek.map((day, index) => (
//           <div key={index}>
//             <strong>{day}:</strong>
//             <select onChange={(e) => handleMealPlanChange(index, e.target.value)}>
//               <option value="">Select a recipe</option>
//               <option value="Recipe 1">Recipe 1</option>
//               <option value="Recipe 2">Recipe 2</option>
//               {/* Add more recipe options here */}
//             </select>
//           </div>
//         ))}
//       </div>
//       <h3>Meal Plan:</h3>
//       <ul>
//         {mealPlan.map((recipe, index) => (
//           <li key={index}>{daysOfWeek[index]}: {recipe || 'No recipe selected'}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MealPlanner;

// Existing imports and component definition...

const MealPlanner = () => {
    const [mealPlan, setMealPlan] = useState(Array(7).fill(null)); // Initialize with 7 days (a week)

    const handleMealPlanChange = (day, recipe) => {
        const updatedPlan = [...mealPlan];
        updatedPlan[day] = recipe;
        setMealPlan(updatedPlan);
    };

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div>
        <h2>Meal Planner</h2>
        {daysOfWeek.map((day, index) => (
            <div key={index}>
            <strong>{day}:</strong>
            <select
                value={mealPlan[index] || ''}
                onChange={(e) => handleMealPlanChange(index, e.target.value)}
            >
                <option value="">Select a recipe</option>
                {/* Add logic to fetch and populate recipe options */}
            </select>
            </div>
        ))}
        <h3>Meal Plan:</h3>
        <ul>
            {mealPlan.map((recipe, index) => (
            <li key={index}>{daysOfWeek[index]}: {recipe || 'No recipe selected'}</li>
            ))}
        </ul>
        </div>
    );
};

export default MealPlanner;
  