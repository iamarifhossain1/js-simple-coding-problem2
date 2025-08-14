mobiles = [
    {Name: 'Samsung', Model: 'A50', Camera: '25mp', Ram: '6GB', Battery: '4500mAh', Price: 50000},
    {Name: 'Apple', Model: 'A50', Camera: '25mp', Ram: '6GB', Battery: '4500mAh', Price: 130000},
    {Name: 'Xiaomi', Model: 'A50', Camera: '25mp', Ram: '6GB', Battery: '4500mAh', Price: 35000},
    {Name: 'Realme', Model: 'A50', Camera: '25mp', Ram: '6GB', Battery: '4500mAh', Price: 40000},
    {Name: 'Oppo', Model: 'A50', Camera: '25mp', Ram: '6GB', Battery: '4500mAh', Price: 45000}
]

function getCheapest(phones) {
    let min = phones[0];
    for (const phone of phones) {
        if (phone.Price < min.Price) {
            min = phone;
        }
    }
    return min;
}

const cheapest = getCheapest(mobiles);
console.log('Cheapest Phone:', cheapest);


function getMax(phones) {
    let max = phones[0];
    for (const phone of phones) {
        if (phone.Price > max.Price) {
            max = phone;
        }
    }
    return max;
}

const max = getMax(mobiles);
console.log('Highest Phones:', max);
