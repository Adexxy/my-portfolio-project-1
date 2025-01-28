import React from 'react';
import MealPlanner from './components/MealPlanning/MealPlanner';
import ShoppingList from './components/ShoppingList/ShoppingList';
import Dashboard from './components/Dashboard/Dashboard';
import UserProfile from './components/Profile/UserProfile';
import RecipeList from './components/RecipeSearch/RecipeList';

const App = () => {
  return (
    <div>
      <h1>Recipe App</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: '1', marginRight: '20px' }}>
          <MealPlanner />
          <ShoppingList />
        </div>
        <div style={{ flex: '1' }}>
          <Dashboard />
          <UserProfile />
        </div>
      </div>
      <RecipeList />
    </div>
  );
};

export default App;




