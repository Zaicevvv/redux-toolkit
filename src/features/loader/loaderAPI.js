export function fetchItems() {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ data: ["item1", "item2", "item3"] }), 3000)
    );
}