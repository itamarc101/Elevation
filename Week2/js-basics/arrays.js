const numbers = [1,2,3,4,5,6,7,8,9,10]

// Delete second and third elements
// from element 1 (second element), delete 2 elements
numbers.splice(1,2);

// Fourth element to 1
numbers[3] = 1;

// Delete last 4 elements
numbers.splice(-4);

// Add new element in first index
numbers.unshift(0);

console.log(numbers)