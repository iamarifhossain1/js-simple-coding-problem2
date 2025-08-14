const products = [
    {name: 'Shampoo', price: 300, quantity: 2 },
    {name: 'Churuni', price: 100, quantity: 3},
    {name: 'Shirt', price: 700, quantity: 5},
    {name: 'Pant', price: 1200, quantity: 1},
]

function cartTotal (products) {
    let total = 0;
    for (const product of products) {
        const productPrice = product.price * product.quantity;
        total = total + productPrice;
    }
    return total;
}

const cart = cartTotal (products);
console.log('Total:', cart);
