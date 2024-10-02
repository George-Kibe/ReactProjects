const {fetchPromise} = require("../functions/fetchPromise")

test("The data is Peanut butter", () => {
    return expect(fetchPromise()).resolves.toBe("Peanut butter")
})

// test("the fetch fails with an error", ()=> {
//     return expect(fetchPromise()).rejects.toBe("error")
// })