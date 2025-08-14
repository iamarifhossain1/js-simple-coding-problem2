const heights = [56,62,58,32,79,91,1200];

function getMax(numbers) {
    let max = numbers[0];
    for (const number of numbers) {
        if (number > max) {
            max = number;
        }
    }
    return max;
    
}

const max = getMax(heights);
console.log(max);

const minNumber =[10, 54, 67, 49, 51, 102, 451, 22, 69];

function getMin(findMinNum) {
    let min = findMinNum[0];
    for (const number of findMinNum) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}   

const min = getMin(minNumber);
console.log(min);
