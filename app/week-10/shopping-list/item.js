export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li 
            className="bg-black p-2 my-2 rounded border border-gray-800 hover:bg-gray-900 cursor-pointer transition-colors"
            onClick={() => onSelect(name)}
        >
            <h3 className="text-xl">{name}</h3>
            <p>
                Quantity: {quantity}
            </p>
            <p>
                Category: {category}
            </p>
        </li>
    );
}