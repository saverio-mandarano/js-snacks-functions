/* Scrivi una funzione che accetti una stringa
 e restituisca il numero di vocali contenute al suo interno */
const word = 'javascript';


// Dichiara la funzione qui.
function getNumberOfVowels (string){
    let numberOfVowels = 0;
    const vowels = [
        `a`,
        `e`,
        `i`,
        `o`,
        `u`
    ];

    for (let i=0; i<string.length; i++){
        for (let j=0; j<vowels.length; j++){
            if ( string[i].toLowerCase() === vowels[j] ){
                numberOfVowels ++;
            }
        }
    }

    return numberOfVowels;
}

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)