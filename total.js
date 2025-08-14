const products = [
    {name: 'Shampoo', price: 300},
    {name: 'Churuni', price: 100},
    {name: 'Shirt', price: 700},
    {name: 'Pant', price: 1200},
]

function getTotal(products) {
    let sum = 0;
    for (const product of products) {
        sum = sum + product.price;
    }
    return sum;
}

const expense = getTotal(products);
console.log('Total Expense:', expense);
