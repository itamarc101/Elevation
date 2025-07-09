// let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9]

// let olderThan16 = ages.filter(a => a > 16)
// console.log(olderThan16) // prints [41, 32, 27, 18, 19, 19, 58, 41]

// let vegetables = [
//     { name: "Eggplant", color: "purple" },
//     { name: "Carrot", color: "orange" },
//     { name: "Squash", color: "orange" },
//     { name: "Tomatoe", color: "red" },
//     { name: "Onion", color: "white" },
//     { name: "Sweet Potato", color: "orange" }
//   ]

// let orangeVeg = vegetables.filter(v => v.color === "orange")
// console.log(orangeVeg)

// console.log("FOR OF")
// console.log()
// for (let vegetable of orangeVeg) {
//     console.log(vegetable.name) //expect to see Carrot, Squash, and Sweet Potato
// }
// console.log()
// console.log("FOR EACH")
// console.log()
// orangeVeg.forEach(ov => console.log(ov.name))

// console.log()
// let people = [
//     { salary: 1300, goodPerformance: false },
//     { salary: 1500, goodPerformance: true },
//     { salary: 1200, goodPerformance: true },
//     { salary: 1700, goodPerformance: false },
//     { salary: 1600, goodPerformance: true },
// ]

// people.forEach(p => console.log(p.salary)) //should print 1300, 1800, 1500, 1700, 1900 (on separate lines)

// console.log()
// let poundWeights = [142, 180, 178, 121, 132]

// let kiloWeights = poundWeights.map(pw => Math.round(pw / 2.2))
// console.log(kiloWeights) //prints [65, 82, 81, 55, 60]

// console.log()

// let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]
// let smallCaps = messagesFromDad.map(c => c.toLowerCase())

// console.log(smallCaps)

// console.log()
// let movies = [
//     { title: "Dareangel", studio: "Marvel", year: 2023 },
//     { title: "Batterfly", studio: "Fox", year: 2021 },
//     { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
//     { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
// ]

// let isMarvel = movies.some(m => m.studio === "Marvel")
// console.log(isMarvel)

// console.log()

// let scores = [87, 92, 78, 95, 88, 91]

// let high = scores.reduce((max, score) => score > max ? score : max, 0)
// console.log(high)

// console.log()

// let votes = ["pizza", "tacos", "pizza", "burgers", "pizza", "tacos", "salad"]

// let voteCounts = votes.reduce((counts, vote) => {
//     counts[vote] = (counts[vote] || 0) + 1
//     return counts
// }, {})
// // Result: { pizza: 3, tacos: 2, burgers: 1, salad: 1 }
// console.log(voteCounts)

// console.log()
// let countries = [
//     { name: "Greece", population: 500 },
//     { name: "Namibia", population: 1200 },
//     { name: "Finland", population: 100 },
//     { name: "Switzerland", population: 300 },
//     { name: "Peru", population: 200 }
// ]

// let smallCountries = countries
// .filter(c => c.population < 500)
// .map(c => c.name)
// console.log("Small: " + smallCountries)


const people = [
  {id: 1, name: "Humbert", money: 499, hasAC: false},
  {id: 2, name: "Bellatrix", money: 499, hasAC: true},
  {id: 3, name: "Mola", money: 720, hasAC: false}
]

let isCool = function(humbert){
  return (humbert.money > 500 || humbert.hasAC)
}

let print = (p) => console.log(p)

people.filter(isCool).map(p => p.name).forEach(print)

// console.log(people.find(people.id === 2))
