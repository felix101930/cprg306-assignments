'use client';

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';



export default function Page() {
    return (
        <main className="p-4 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-3">Shopping List</h1>
            <NewItem />
            <ItemList />
        </main>
    );
}
