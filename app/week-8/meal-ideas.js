"use client";

import { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        
        // The API returns { meals: null } if no meals are found
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
}

export default function MealIdeas({ ingredient }) {
    // State to store the list of meal ideas
    const [meals, setMeals] = useState([]);

    // Function to load meal ideas
    const loadMealIdeas = async () => {
        if (ingredient) {
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        } else {
            setMeals([]);
        }
    };

    // Effect hook to load meals when ingredient changes
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">
                Meal Ideas for {ingredient || "..."}
            </h2>
            
            <div>
                {!ingredient ? (
                    <p>Select an item to see meal ideas</p>
                ) : meals.length === 0 ? (
                    <p>No meal ideas found for {ingredient}</p>
                ) : (
                    <ul className="space-y-4">
                        {meals.map((meal) => (
                            <li 
                                key={meal.idMeal}
                                className="bg-black p-4 rounded-xl border border-gray-800"
                            >
                                {meal.strMeal}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}