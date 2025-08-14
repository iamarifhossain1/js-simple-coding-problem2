function woodQuantity (chairQuantity, tableQuantity, bedQuantity) {
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    const chairWood = chairQuantity * perChair;
    const tableWood = tableQuantity * perTable;
    const bedWood = bedQuantity * perBed;

    const totalWoodCalculator = chairWood + tableWood + bedWood;
    return totalWoodCalculator;
}

const result = woodQuantity(0, 2, 4);
console.log(result);


function shoppingExpense(shirt, pant, shoe) {
    const shirtPrice = 500;
    const pantPrice = 1000;
    const shoePrice = 1500;

    const shirtCart = shirt * shirtPrice;
    const pantCart = pant * pantPrice;
    const shoeCart =  shoe * shoePrice;

    const totalExpense = shirtCart + pantCart + shoeCart;
    return totalExpense;
}

const expense = shoppingExpense(5, 5, 5);
console.log(expense);
