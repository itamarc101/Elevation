let meatArr = ["beef","chicken"]
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]

let [wrongMeat, ...correctedVeg] = vegetableArr;
console.log(wrongMeat); // rabbit
console.log(correctedVeg);

meatArr = [...meatArr, wrongMeat];
vegetableArr = [...correctedVeg];

console.log(meatArr);
console.log(vegetableArr);