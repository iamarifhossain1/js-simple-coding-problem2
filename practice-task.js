/** Task - 1
 * Find the lowest number in the array below.
 * const heights2 = [167, 190, 120, 165, 137];
 */

const numArray = [167, 190, 120, 165, 137];

function smallNum(numbers) {
    let numList = numbers[0];
    for (const number of numbers) {
        if (number < numList) {
            numList = number;
        }
    }

    return numList;
}

const numberResult = smallNum(numArray);
console.log(numberResult);


/** Task - 2
 * Find the friend with the smallest name.
 * const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const nameArray = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallName(names) {
    let nameList = names[0];
    for (const name of names) {
        if (name.length < nameList.length) {
            nameList = name;
        }
    }
    return nameList
}

const nameResult = smallName(nameArray);
console.log(nameResult);


/** Task - 3
 * Your task is to calculate the total budget required to buy electronics:
 * laptop = 35000 tk
 * tablet = 15000 tk
 * mobile = 20000 tk
 * Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const totalLaptopBuy = laptopQuantity * laptop;
    const totalTabletBuy = tabletQuantity * tablet;
    const totalMobileBuy = mobileQuantity * mobile;
    totalGadgetBuy = totalLaptopBuy + totalTabletBuy + totalMobileBuy;
    return totalGadgetBuy;
}

const gadgetOutput = calculateElectronicsBudget(1,1,3);
console.log(gadgetOutput);

/** Task - 4
 * You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
 * Input
 * const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
 */

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

function findAveragePhonePrice(phones) {
    let totalPrice = 0;
    if(!Array.isArray(phones) || phones.length === 0) {
        return 0;
    }

    for (const phone of phones) {
        totalPrice = totalPrice + phone.price;
    }

    const average = totalPrice / phones.length;
    return Math.round(average);
}

const phoneOutput = findAveragePhonePrice(phones);
console.log(phoneOutput);


/** Task - 5
 * For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
 * const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
    ];
 */

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
    ];

    function currentSalary(salary) {
        if (!Array.isArray(salary) || salary === 0) {
            return 0;
        }

        let totalSalary = 0;
        for (const emp of employees) {
            const currentSalary = emp.starting + (emp.increment * emp.experience);
                totalSalary = totalSalary + currentSalary;
        }
        return totalSalary;
    }

const salaryOutput = currentSalary(employees);
console.log(salaryOutput);
