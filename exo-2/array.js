
console.log('Tableaux :');
let arr = ["initiale"];
console.log('Valeur initiale : ', arr);

/* b. Au boulot */
arr[1] = 1;
console.log("Ajout via écriture d'index : ", arr);

/* c. Au boulot */
arr.push(2);
console.log('Ajout à la fin : ', arr);


/* d. Au boulot */
arr.unshift(-1)
console.log("Ajout au début : ", arr);


// Ajoute +1 à chaque valeur du tableau
//const modifiedArr = /* e. Au boulot */;
//console.log("Modification de chaque valeur du tableau :", modifiedArr);

/*  f  */
// Ne garde que les valeurs numériques dans le tableau
const filteredArr = arr.filter((val)=> (typeof val==="number"));
console.log("Ne garde que les valeurs numériques : ", filteredArr);

tab = Object.entries(obj)  ;

filtab = tab.filter((val)=> (val[1]!=null)   );

filteredObj = Object.entries(filtab);

console.log("Objet sans props nulles : ", filteredObj);






