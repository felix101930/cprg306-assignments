"use client";

import { useState } from 'react';

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

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
        <div className="w-full max-w-md">
            <div className="mb-4">
                <label className="block text-sm mb-1">Quantity:</label>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={decrement}
                        disabled={quantity <= 1}
                        className="bg-gray-700 text-white px-3 py-1 rounded-md disabled:opacity-50 hover:bg-gray-600"
                    >
                        -
                    </button>
                    <span className="w-8 text-center">{quantity}</span>
                    <button
                        onClick={increment}
                        disabled={quantity >= 20}
                        className="bg-blue-600 text-white px-3 py-1 rounded-md disabled:opacity-50 hover:bg-blue-500"
                    >
                        +
                    </button>
                </div>
                <div className="text-sm text-gray-400 mt-1">
                    Allowed range: 1-20
                </div>
            </div>
        </div>
    );
}
