


//A faire




console.log("Fusion d'objets avec le spread operator :");
const jake = {husbandFirstname: "Jake", lastname: "Peralta"};
const amy = {wifeFirstname: "Amy", lastname: "Santiago"};

const wedding = Object.assign(amy,jake);

console.log("Mariage :", wedding);

console.log("Le spread operator dans les fonctions :");

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }

console.log({
  "sum(1)" : sum(1), // 1 
  "sum(5,5,5)" : sum(5,5,5) // 15
});

// Tupple à décomposer
[firstname, lastname, age] =   ["Maud", "Zarella", 24];

 //A faire 
// console.log() à faire fonctionner
console.log("Décomposition d'un tableau :") 
console.log({ firstname, lastname, age });


