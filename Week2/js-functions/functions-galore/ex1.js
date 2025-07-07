const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]

const capitalize = function(str) {
  let capitalizedStr = ""
  capitalizedStr += str[0].toUpperCase()      // first letter, capitalized
  capitalizedStr += str.slice(1)              // rest of the string
  return capitalizedStr
}

const getAge = function(age) {
  if (age < 21) return "an Underage";
  if (age > 55) return "a 55+";
  return `a ${age}`;
}

const capitalizeWords = function(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = capitalize(words[i]);
  }
  return words.join(" ");
}

const getProfession = function(profession) {
    return capitalizeWords(profession);
}

const getLocation = function(city, country) {
  return `${capitalize(city)}, ${capitalize(country)}`;
}

const getCatchphrase = function(catchphrase) {
  return `"${capitalize(catchphrase)}"`;
}

const getSummary = function(person){
  let summary = "";
  summary += capitalize(person.name);
  summary +=  `is ${getAge(person.age)}`; //Yes - you can put a function call inside the tick quotes!
  summary += `${getProfession(person.profession)}`;
  summary += `from ${getLocation(person.city, person.country)}.`;
  summary += `${capitalize(person.name)} loves to say ${getCatchphrase(person.catchphrase)}.`;
  return summary;
}

for (let i = 0; i < people_info.length; i++) {
  console.log(getSummary(people_info[i]));
}


// function changeInfo(person) {
//     const updatedPerson = {};

//     for (let key in person) {
//         if (key === "age") {
//             const age = person.age;
//             if (age < 21) {
//                 updatedPerson.age = "Underage";
//             }
//             else if (age > 55) {
//                 updatedPerson.age = "55+";
//             }
//             else {
//                 updatedPerson.age = age;
//             }
//         }
//         else if (key === "catchphrase") {
//             const capitalized = capitalize(person[key]);
//             updatedPerson[key] = `"${capitalized}"`;      
//         } 
//         else if (key === "city" || key === "country") {
//             continue;
//         }
//         else {
//             const capitalized = capitalize(person[key]);
//             updatedPerson[key] = `"${capitalized}"`;              
//         }
//     }
//     const city = capitalize(person.city);
//     const country = capitalize(person.country);
    
//     updatedPerson.location = `${city}, ${country}`;

//     return updatedPerson;
// }

// const formattedPeople = [];
// for (let i = 0; i < people_info.length; i++) {
//     formattedPeople.push(changeInfo(people_info[i]));
// }

// function getSummary(person) {
//     return `${person.name} is a ${person.age} ${person.profession} from ${person.location}. ${person.name} loves to say ${person.catchphrase}.`;
// }

// console.log(formattedPeople);
// console.log("########################################################333");
// for (let i = 0; i < formattedPeople.length; i++) {
//   console.log(getSummary(formattedPeople[i]));
// }
