const fetchData = require("../functions/fetchData");
const { fetchPromise } = require("../functions/fetchPromise");

test("The data is peanut butter", done=> {
    function callback(data) {
        try {
            expect(data).toBe("Peanut butter");
            done(); 
        } catch (error) {
            done(error)
        }
        
    }
    fetchData(callback);
})

test("the data is peanut butter", async() => {
    const data = await fetchPromise();
    expect(data).toBe("Peanut butter");
})