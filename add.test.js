const add = require('./add');

describe("Tests for adding",() => {

    test('adds 1 and 2 equil to 3', () => {
        expect(add(1,2)).toBe(3);
    })
    
    test('adds 1 and 2 does not equal 4', () => {
        expect(add(1,2)).not.toBe(4)
    })

})

