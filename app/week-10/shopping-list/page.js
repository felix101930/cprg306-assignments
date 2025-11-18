'use client'; 

import { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../../contexts/AuthContext';
import { getItems, addItem } from '../_services/shopping-list-service';
import Link from 'next/link';

export default function Page() {
    const { user } = useUserAuth();
    
    // Initialize items as an empty array (no json data)
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    // Function to load items from Firestore
    async function loadItems() {
        if (user) {
            const dbItems = await getItems(user.uid);
            setItems(dbItems);
        }
    }

    // UseEffect to load items when component mounts or user changes
    useEffect(() => {
        loadItems();
    }, [user]);

    // Event handler for adding new items
    const handleAddItem = async (newItem) => {
        if (user) {
            // 1. Create the item object without the fake ID from NewItem component
            // We strip the 'id' field because Firestore creates its own unique ID
            const { id, ...itemData } = newItem; 
            
            // 2. Call Firestore to add item
            const docId = await addItem(user.uid, itemData);
            
            // 3. Update local state with the real ID from Firestore so it appears instantly
            const newItemWithId = { ...itemData, id: docId };
            setItems([...items, newItemWithId]);
        }
    };

    const handleItemSelect = (itemName) => {
        // Clean up the item name
        const cleanName = itemName
            .replace(/[\u{1F300}-\u{1F9FF}]/gu, '') // Remove emojis
            .split(',')[0] // Remove anything after comma
            .trim(); // Remove extra whitespace

        setSelectedItemName(cleanName);
    };

    if (!user) {
        return (
            <main className="p-4">
                <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
                <p>You must be logged in to view this page.</p>
                <Link href="/week-10" className="text-blue-400 hover:underline mt-4 inline-block">
                    Return to Landing Page
                </Link>
            </main>
        );
    }

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