"use client";

import { useState } from 'react';

export default function NewItem() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");    
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const item = {
            name: name,
            quantity: quantity,
            category: category,
        };
        
        console.log(item);
        alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
        
        // Reset form
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="bg-black p-6 rounded-lg max-w-md mx-auto">
            <div className="mb-4">
                <label className="block text-white text-lg mb-2">Quantity:</label>
                <div className="flex items-center space-x-3">
                    <button
                        onClick={decrement}
                        disabled={quantity <= 1}
                        className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white text-xl rounded-lg disabled:opacity-50 hover:bg-gray-700 transition-colors"
                    >
                        -
                    </button>
                    <span className="w-12 text-center text-xl text-white">{quantity}</span>
                    <button
                        onClick={increment}
                        disabled={quantity >= 20}
                        className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white text-xl rounded-lg disabled:opacity-50 hover:bg-blue-500 transition-colors"
                    >
                        +
                    </button>
                </div>
                <p className="text-blue-400 text-sm mt-2">
                    Allowed range: 1-20
                </p>
            </div>
        </div>
    );
}
