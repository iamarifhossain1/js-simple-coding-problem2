function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide number'
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply (5 + 7);
console.log(result);


function fullName(firstName, secondName) {
    if (typeof firstName !== 'string' || typeof secondName !== 'string') {
        return 'Name should be a "String"';
    }
    const name = firstName + ' ' + secondName;
    return name;
}

const nameOutput = fullName('Arif', 'Hossain');
console.log(nameOutput);


function getPrice(product) {
    if(typeof product !== 'object') {
        return 'Please provide an object'
    }    
    const price = product.price;
    return price;
}

// const productPrice = getPrice({name: 'OTG Port', color: 'Black', price: 100});
const productPrice = getPrice(555);
console.log(productPrice);


function getSecond(numbers) {
    if (!Array.isArray (numbers)) {
        return 'Provide an valid "Array"'
    }
    const number = numbers[1];
    return number;
}

const second = getSecond(21, 22);
console.log(second);
