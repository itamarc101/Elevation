const { add, calculateHyp } = require('./code');

test("add should return sum of a + b", () => {
    let sum = add(1, 2)
    expect(sum).toBe(3)
})


test("pythagoreas sohuld return sum of a^2 + b^2", () => {
    let ptgrs = calculateHyp(3, 4);
    expect(ptgrs).toBe(5);
});