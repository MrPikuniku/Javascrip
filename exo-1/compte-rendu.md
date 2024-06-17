

Compte rendu 

Exercice 1

Partie 1/

a/ParseInt() transforme un décimal en entier en retirant sa partie décimale et parseFloat() n'apporte pas vraiment de modifications à un nomb    

b/c'est le nan qui représente une valeur numérique qui n'est pas un nombre

c/La fonction est  isNan()

Partie 2/


function isEven(n){
  if(n%2==0){
    return true;
  }
  return false; 
};


const isOdd = (n) => {
  return (n%2==1);
} ;

console.log({
    'isEven(1)' : isEven(1), // false
    'isEven(2)' : isEven(2), // true 
    'isOdd(1)' : isOdd(1), // true 
    'isOdd(2)' : isOdd(2), // false
  });

Exercice 2

a


function 




