const people = [  {name: "Ashley", age: 23},
  {name: "Donovan", age: 47},
  {name: "Lucas", age: 18}
]

console.log(people);
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name + " is " + people[i].age + " years old");
}
