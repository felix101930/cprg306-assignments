export default function Item({ name, quantity, category }) {
    return (
        <li className="bg-black p-2 my-2 rounded border border-gray-800">
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
