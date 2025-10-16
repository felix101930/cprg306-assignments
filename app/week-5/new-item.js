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
        <form onSubmit={handleSubmit} className="bg-black p-6 rounded-lg max-w-md mx-auto">
            <div className="mb-4">
                <label className="block text-white text-lg mb-2">Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 text-lg bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Item name"
                />
            </div>

            <div className="mb-4">
                <label className="block text-white text-lg mb-2">Category:</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="w-full p-2 text-lg bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen">Frozen Foods</option>
                    <option value="Canned">Canned Goods</option>
                    <option value="Dry">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-white text-lg mb-2">Quantity:</label>
                <div className="flex items-center space-x-3">
                    <button
                        type = "button"
                        onClick={decrement}
                        disabled={quantity <= 1}
                        className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white text-xl rounded-lg disabled:opacity-50 hover:bg-gray-700 transition-colors"
                    >
                        -
                    </button>
                    <span className="w-12 text-center text-xl text-white">{quantity}</span>
                    <button
                        type = "button"
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

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors text-lg font-semibold"
            >
                Add Item
            </button>
        </form>
    );
}
