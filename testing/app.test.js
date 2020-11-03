const { sumNumbers, doubleNumbers } = require('./app.js')

describe('sumNumbers', () => {
    it('given an empty array, returns 0', () => {
        const sum = sumNumbers([]);

        expect(sum).toEqual(0);
    })

    it('given an array with one number, returns that number', () => {
        const sum = sumNumbers([1]);

        expect(sum).toEqual(1);
    })

    it('given multiple numbers, returns the sum', () => {
        const sum = sumNumbers([1, 2, 3]);

        expect(sum).toEqual(6);
    })

    it('supports negative numbers', () => {
        const sum = sumNumbers([1, -2, 3]);

        expect(sum).toEqual(2);
    })
})

describe('doubleNumbers', () => {
    it('given an empty array, returns an empty array', () => {
        const result = doubleNumbers([]);

        expect(result).toEqual([]);
    })

    it('given an empty array, returns an empty array', () => {
        const result = doubleNumbers([1, 2, 3]);

        expect(result).toEqual([2, 4, 6]);
    })
})