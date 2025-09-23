import Item from './item';

export default function ItemList() {
    const items = [
        {
            name: "milk, 4 L 🥛",
            quantity: 1,
            category: "dairy"
        },
        {
            name: "bread 🍞",
            quantity: 2,
            category: "bakery"
        },
        {
            name: "eggs, dozen 🥚",
            quantity: 2,
            category: "dairy"
        },
        {
            name: "bananas 🍌",
            quantity: 6,
            category: "produce"
        },
        {
            name: "broccoli 🥦",
            quantity: 3,
            category: "produce"
        },
        {
            name: "chicken breasts 🍗",
            quantity: 4,
            category: "meat"
        },
        {
            name: "pasta sauce 🥫",
            quantity: 3,
            category: "canned goods"
        },
        {
            name: "spaghetti 🍝",
            quantity: 2,
            category: "dry goods"
        },
        {
            name: "toilet paper 🧻",
            quantity: 12,
            category: "household"
        },
        {
            name: "paper towels",
            quantity: 3,
            category: "household"
        },
        {
            name: "dish soap 🧴",
            quantity: 1,
            category: "household"
        },
        {
            name: "hand soap 🧴",
            quantity: 4,
            category: "household"
        }
    ];

    return (
        <div>
            {items.map((item) => (
                <Item 
                    key={item.name}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                />
            ))}
        </div>
    );
}
