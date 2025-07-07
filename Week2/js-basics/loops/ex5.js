const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

const keys = Object.keys(dictionary);

Object.keys(dictionary).forEach(key => {
  console.log("Words that begin with " + key + ":");
  
  dictionary[key].forEach(element => {
    console.log(element);
  });
});