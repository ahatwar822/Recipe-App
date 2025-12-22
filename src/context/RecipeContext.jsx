import { createContext, useState } from "react"

export const recipecontext = createContext(null)
const RecipeContext = (Props) => {
    const [data, setData] = useState([
        {
            "id": 101,
            "title": "Spaghetti Aglio e Olio",
            "category": "Brakfast",
            "cuisine": "Italian",
            "description": "A simple Italian pasta dish made with garlic, olive oil, and chili flakes.",
            "ingredients": [
                { "name": "Spaghetti", "quantity": 200, "unit": "grams" },
                { "name": "Garlic", "quantity": 4, "unit": "cloves" },
                { "name": "Olive Oil", "quantity": 60, "unit": "ml" },
                { "name": "Red Chili Flakes", "quantity": 1, "unit": "tsp" },
                { "name": "Salt", "quantity": 1, "unit": "tsp" },
                { "name": "Fresh Parsley", "quantity": 2, "unit": "tbsp" }
            ],
            "instructions": [
                "Boil water in a large pot, add salt, and cook spaghetti until al dente.",
                "While pasta cooks, heat olive oil in a pan over medium heat.",
                "Add sliced garlic and chili flakes, sauté until garlic is golden.",
                "Drain pasta, reserving some cooking water.",
                "Toss pasta in the garlic oil mixture, adding a splash of pasta water if needed.",
                "Garnish with chopped parsley and serve hot."
            ],
            "nutrition": {
                "calories": 420,
                "protein_g": 12,
                "carbs_g": 60,
                "fat_g": 15
            },
            "tags": ["vegetarian", "quick", "pasta"],
            "image_url": "https://cdn.pixabay.com/photo/2022/10/12/22/09/spaghetti-bolognese-7517639_1280.jpg"
        },
        {
            "id": 102,
            "title": "Classic Pancakes",
            "category": "Breakfast",
            "cuisine": "American",
            "description": "Fluffy classic pancakes made with simple ingredients, perfect for a quick and comforting breakfast.",
            "ingredients": [
                { "name": "All-purpose Flour", "quantity": 200, "unit": "grams" },
                { "name": "Milk", "quantity": 250, "unit": "ml" },
                { "name": "Egg", "quantity": 1, "unit": "large" },
                { "name": "Baking Powder", "quantity": 2, "unit": "tsp" },
                { "name": "Sugar", "quantity": 2, "unit": "tbsp" },
                { "name": "Butter", "quantity": 30, "unit": "grams" }
            ],
            "instructions": [
                "In a bowl, mix flour, sugar, and baking powder.",
                "Add milk and egg, whisk until smooth.",
                "Heat a non-stick pan over medium heat and grease lightly.",
                "Pour batter and cook until bubbles form on the surface.",
                "Flip and cook until golden brown.",
                "Serve warm with syrup or fruits."
            ],
            "nutrition": {
                "calories": 350,
                "protein_g": 9,
                "carbs_g": 50,
                "fat_g": 12
            },
            "tags": ["sweet", "quick", "breakfast"],
            "image_url": "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg"
        },
        {
            "id": 103,
            "title": "Chicken Biryani",
            "category": "Lunch",
            "cuisine": "Indian",
            "description": "A flavorful and aromatic rice dish layered with marinated chicken and fragrant spices.",
            "ingredients": [
                { "name": "Basmati Rice", "quantity": 300, "unit": "grams" },
                { "name": "Chicken", "quantity": 500, "unit": "grams" },
                { "name": "Yogurt", "quantity": 150, "unit": "ml" },
                { "name": "Onion", "quantity": 2, "unit": "medium" },
                { "name": "Biryani Masala", "quantity": 2, "unit": "tbsp" },
                { "name": "Ghee", "quantity": 3, "unit": "tbsp" }
            ],
            "instructions": [
                "Wash and soak rice for 30 minutes.",
                "Marinate chicken with yogurt and spices.",
                "Cook rice until 70% done and set aside.",
                "Fry onions until golden brown.",
                "Layer rice and chicken in a pot.",
                "Cook on low heat until fully done."
            ],
            "nutrition": {
                "calories": 520,
                "protein_g": 28,
                "carbs_g": 65,
                "fat_g": 18
            },
            "tags": ["spicy", "rice", "traditional"],
            "image_url": "https://cdn.pixabay.com/photo/2023/08/23/12/06/ai-generated-8208445_1280.png"
        },
        {
            "id": 104,
            "title": "Vegetable Stir Fry",
            "category": "Dinner",
            "cuisine": "Asian",
            "description": "A healthy and colorful vegetable stir fry tossed in a light soy-garlic sauce.",
            "ingredients": [
                { "name": "Broccoli", "quantity": 150, "unit": "grams" },
                { "name": "Bell Peppers", "quantity": 2, "unit": "medium" },
                { "name": "Carrot", "quantity": 1, "unit": "large" },
                { "name": "Soy Sauce", "quantity": 2, "unit": "tbsp" },
                { "name": "Garlic", "quantity": 3, "unit": "cloves" },
                { "name": "Sesame Oil", "quantity": 1, "unit": "tbsp" }
            ],
            "instructions": [
                "Chop all vegetables into bite-sized pieces.",
                "Heat oil in a wok over high heat.",
                "Add garlic and sauté until fragrant.",
                "Add vegetables and stir fry for 5–6 minutes.",
                "Add soy sauce and toss well.",
                "Serve hot with rice or noodles."
            ],
            "nutrition": {
                "calories": 260,
                "protein_g": 8,
                "carbs_g": 30,
                "fat_g": 10
            },
            "tags": ["healthy", "vegan", "quick"],
            "image_url": "https://cdn.pixabay.com/photo/2024/04/07/05/33/ai-generated-8680634_1280.jpg"
        }
    ])
    console.log("data from contex", data);

    return (
        <recipecontext.Provider value={{ data, setData }}>
            {Props.children}
        </recipecontext.Provider>
    )
}

export default RecipeContext