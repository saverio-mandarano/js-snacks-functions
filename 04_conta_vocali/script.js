/* Scrivi una funzione che accetti una stringa
 e restituisca il numero di vocali contenute al suo interno */
const word = 'javascript';


// Dichiara la funzione qui.
function getNumberOfVowels (string){
    let stringVowels = [];
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
                stringVowels.push(string[i]);
            }
        }
    }

    return `${stringVowels.length} ${stringVowels}`;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getNumberOfVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)