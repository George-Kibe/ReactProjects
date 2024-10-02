const sum = require("../functions/sum");

test("Sum Function: Add 1+2 Equals 3", () => {
    expect(sum(1,2)).toBe(3)
})

test("Two plus Two is Four", () => {
    expect(2 + 2).toBe(4)
})

// when dealing with objects and arrays
test("Object assignment", () => {
    const data = { one: 1 }
    data["two"] = 2
    data["three"] = 3
    expect(data).toEqual({ one: 1, two: 2, three: 3 })
})

// Truthy and falsy values
test("null is falsy", () => {
    const n = null;
    const y = 0;
    const z = 1;

    expect(n).toBeFalsy()
    expect(y).toBeFalsy()
    expect(y).not.toBeTruthy()
    expect(z).toBeTruthy()
})
