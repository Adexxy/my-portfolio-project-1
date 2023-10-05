const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');  // Import MongoClient
const app = express();

app.use(cors());

const recipes = [
  {
    id: 1,
    name: 'Spaghetti Bolognese',
    ingredients: ['spaghetti', 'ground beef', 'tomato sauce'],
    instructions: ['Boil spaghetti', 'Brown the ground beef', 'Mix with tomato sauce'],
  },
  {
    id: 2,
    name: 'Chicken Stir-Fry',
    ingredients: ['chicken breast', 'vegetables', 'soy sauce'],
    instructions: ['Stir-fry chicken and vegetables', 'Add soy sauce'],
  },
];

// MongoDB connection URI
const uri = 'mongodb://username:password@localhost:27017/mydatabase'; // Update with your MongoDB connection URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Call this function to connect to MongoDB
connectToDatabase();

app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
