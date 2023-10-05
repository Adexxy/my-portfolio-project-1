import React, { useState } from 'react';

const UserProfile = () => {
    const [username, setUsername] = useState('JohnDoe');
    const [email, setEmail] = useState('johndoe@example.com');
  
    const handleSave = () => {
      // Logic to save the updated user profile
      alert('Profile saved successfully!');
    };
  
    return (
      <div>
        <h2>User Profile</h2>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {/* Add more profile fields (e.g., profile picture, bio, etc.) */}
        <button onClick={handleSave}>Save Profile</button>
      </div>
    );
};

export default UserProfile;
  



// import React from 'react';

// const Dashboard = () => {
  // Logic to fetch and display user's meal plans and favorite recipes
//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <p>Welcome to your dashboard!</p>
//       {/* Add more content based on the user's data */}
//     </div>
//   );
// };

// export default Dashboard;


// Existing imports and component definition...

// const Dashboard = () => {
//     // Logic to fetch and display user's meal plans and favorite recipes
  
//     return (
//       <div>
//         <h2>Dashboard</h2>
//         <p>Welcome to your dashboard!</p>
//         {/* Add more content based on the user's data */}
//         <p>Your meal plan for the week:</p>
//         <ul>
//           <li>Monday: Spaghetti Bolognese</li>
//           <li>Tuesday: Chicken Stir-Fry</li>
//           {/* Add more days and meal plans */}
//         </ul>
//         <p>Your favorite recipes:</p>
//         <ul>
//           <li>Recipe 1</li>
//           <li>Recipe 2</li>
//           {/* Add more favorite recipes */}
//         </ul>
//       </div>
//     );
// };

// export default Dashboard;

// Existing imports and component definition...


  