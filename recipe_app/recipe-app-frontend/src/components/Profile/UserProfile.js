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
      <button onClick={handleSave}>Save Profile</button>
    </div>
  );
};

export default UserProfile;
