const {
    returnTwo,
    greeting,
    add,
    subtract,
    multiply,
    divide
} = require("./functions.js")

test('returns 2', () => expect(returnTwo()).toEqual(2))
test('returns hello james',() => expect(greeting('James')).toBe("Hello, James."))
test('returns hello jill',() => expect(greeting('Jill')).toBe("Hello, Jill.") )
describe("Math functions", () =>{
test('returns 3',() => expect(add(1,2)).toBe(3))
test('returns 14',() => expect(add(5,9)).toBe(14))
test('returns 14',() => expect(subtract(23,9)).toBe(14))
test('returns 14',() => expect(multiply(2,7)).toBe(14))
test('returns 14',() => expect(divide(28,2)).toBe(14))
})
