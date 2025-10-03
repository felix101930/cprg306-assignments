import NewItem from './new-item';

export default function Page() {
    return (
        <main className="p-2 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Add New Item</h1>
            <NewItem />
        </main>
    );
}
