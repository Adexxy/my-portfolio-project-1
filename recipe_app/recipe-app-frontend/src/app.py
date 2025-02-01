from flask import Flask, jsonify

app = Flask(__name__)

# Sample recipe data
recipes = [
    {"id": 1, "name": "Spaghetti Bolognese", "ingredients": ["spaghetti", "ground beef", "tomato sauce"], "instructions": ["Boil spaghetti", "Brown the ground beef", "Mix with tomato sauce"]},
    {"id": 2, "name": "Chicken Stir-Fry", "ingredients": ["chicken breast", "vegetables", "soy sauce"], "instructions": ["Stir-fry chicken and vegetables", "Add soy sauce"]}
]

@app.route('/api/recipes', methods=['GET'])
def get_recipes():
    return jsonify(recipes)

if __name__ == '__main__':
    app.run(debug=True)
