/* Scrivi una funzione che accetti un'array di stringhe e una lettera e 
restituisca un array contenente solo le parole che iniziano con quella lettera */
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function getWordsStartingWith (array, letter) {
    let  wordsStartingWith = [];
    
    for (let i=0; i<array.length; i++){
        if ( array[i][0] === letter){
            wordsStartingWith.push(array[i]);
        }
    }
    return  wordsStartingWith;
}

// Invoca la funzione qui e stampa il risultato in console
const letter = prompt(`Inserire una consonante:`);
console.log(getWordsStartingWith(names, letter));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]