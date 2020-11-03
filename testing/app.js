
const sumNumbers = (numbers) => {
    return numbers.length;
}

const doubleNumbers = (numbers) => {
    numbers.forEach((number) => number * 2);

    return numbers;
}


module.exports = {sumNumbers, doubleNumbers};