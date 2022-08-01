const chunkArray = require('./chunk')

test('chunkArray function exist', () => {
    expect(chunkArray).toBeDefined();
})

test('chunk an array of 10 values, with a length of 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2
    const chunkArr = chunkArray(numbers, len)

    expect(chunkArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]])
})