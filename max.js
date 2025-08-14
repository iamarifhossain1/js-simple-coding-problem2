// Simple if-else condition

const disha = 56;
const salman = 95;

if (disha > salman) {
    console.log('Disha will get the Strawberry');
}

else { 
    console.log('Salman will get the Strawberry');
    
}

function getMax(number1, number2) {
    if (number1 > number2) {
        return 'Disha will get the mug'
    }

    else {
        return 'Salam will get the mug'
    }
}

const maxNum = getMax(25, 55);
console.log(maxNum);


const jim = 56;
const kim = 75;
const tim = 87;

if (jim > kim && jim > tim) {
    console.log('Jim is the ultimate boss');
}

else if (kim > jim && kim > tim) {
    console.log('kim is the ultimate boss');
}

else {
    console.log('Tim is the ultimate boss');
    
}

function maxOfThree(jim, kim, tim) {
    if (jim > kim && jim > tim) {
        console.log('Jim is the ultimate boss');
    }

    else if (kim > jim && kim > tim) {
        console.log('kim is the ultimate boss');
    }

    else {
        console.log('Tim is the ultimate boss');
    }
}

const three = maxOfThree (25,30, 35);
console.log(three);


const numbers = Math.max(20,30,40,50,60,70,10,80,90,110,100);
console.log(numbers);


