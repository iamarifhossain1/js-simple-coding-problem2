/**
 * first 100 ---> 100
 * 101-200 -----> 90
 * 201 -----> 70
 */

function layeredDiscount(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const remainingPrice = 70;

    if (quantity <= 100) {
        const total = quantity * 100;
        return total;
    }

    else if (quantity <= 200) {
        const prothom100 = 100 * first100Price;
        const baki100 = quantity - 100;
        const ditiyo100 = baki100 * second100Price;
        const total = prothom100 + ditiyo100;
        return total;
    }

    else {
        const prothom100 = 100 * first100Price;
        const ditiyo100 = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingQuantityTotal = remainingQuantity * remainingPrice;
        const total = prothom100 + ditiyo100 + remainingQuantityTotal;
        return total;
    }
}
const output = layeredDiscount(210);
console.log('Total Cost:', output);
