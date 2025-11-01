'use client'; 

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
    // Initialize states
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    // Event handler for adding new items
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    // Event handler for selecting an item
    const handleItemSelect = (itemName) => {
        // Clean up the item name by:
        // 1. Remove emojis
        // 2. Remove anything after the comma (including the comma)
        // 3. Trim whitespace
        const cleanName = itemName
            .replace(/[\u{1F300}-\u{1F9FF}]/gu, '') // Remove emojis
            .split(',')[0] // Remove anything after comma
            .trim(); // Remove extra whitespace

        setSelectedItemName(cleanName);
    };

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