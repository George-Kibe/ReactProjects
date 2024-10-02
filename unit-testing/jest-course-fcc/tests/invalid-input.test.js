const myFunction = require("../functions/myFunction");

test("Throws an invalid input", () => {
    expect(() => {
        myFunction("invalid input");
    }).toThrow("Invalid input");
})