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

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Meal Ideas</h2>
            {/* We'll add the meal list rendering here later */}
        </div>
    );
}