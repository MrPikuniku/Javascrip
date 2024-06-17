const obj = {
    initialProp: "My initial property",
    emptyProp: null,
  };

console.log("Objet initial : ", obj);

/* 1. Au boulot */

obj.writtenProp = "written";
console.log("Ajout d'une propriété : ", obj);


/* 2. Au boulot */
obj.nestedProp = { key: "value" };
console.log("Ajout d'une propriété imbriquée : ", obj);

console.log("Lecture d'une propriété imbriquée :", obj.nestedProp.key );
/* 3. Au boulot */

console.log("Lecture d'un objet via for..in");
/* 4. Au boulot */
for(const prop in obj){
    console.log(`${prop}: ${obj[prop]} `)
}



/* 5. Au boulot */
const arr = Object.entries(obj);

const filtarr = arr.filter((val) =>   (val[1]!=null));

console.log(filtarr)

const filteredObj = Object.fromEntries(filtarr)

console.log(filteredObj)

console.log("Objet sans props nulles : ", filteredObj);


