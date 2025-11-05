'use client'; 

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';
import { useUserAuth } from '../../contexts/AuthContext';
import Link from 'next/link';

export default function Page() {
    // Get user from the auth context
    const { user } = useUserAuth();
    
    // Initialize states
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    // Event handler for adding new items
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    // Event handler for selecting an item
    const handleItemSelect = (itemName) => {
        // Clean up the item name
        const cleanName = itemName
            .replace(/[\u{1F300}-\u{1F9FF}]/gu, '') // Remove emojis
            .split(',')[0] // Remove anything after comma
            .trim(); // Remove extra whitespace

        setSelectedItemName(cleanName);
    };

    // If the user is not logged in, prevent rendering the page
    if (!user) {
        return (
            <main className="p-4">
                <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
                <p>You must be logged in to view this page.</p>
                <Link href="/week-9" className="text-blue-400 hover:underline mt-4 inline-block">
                    Return to Landing Page
                </Link>
            </main>
        );
    }

    // If the user is logged in, render the shopping list
    return (
        <main className="p-4">
            <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
            
            <div className="flex gap-8">
                <div className="flex-1">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList 
                        items={items} 
                        onItemSelect={handleItemSelect} 
                    />
                </div>
                
                <div className="flex-1">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}