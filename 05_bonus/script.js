/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/
const userName = 'Saverio';


// Dichiara la funzione qui.
function timeRelatedGreetingTo (word){

    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();
    console.log(`currentTime: ${currentHours}:${currentMinutes}:${currentSeconds}`);

    let timeRelatedGreeting;
    if (currentHours >= 4 && currentHours < 13) {
        timeRelatedGreeting = `Buongiorno ${word}`;
    } else if (currentHours >= 13 && currentHours < 17) {
        timeRelatedGreeting = `Buon pomeriggio ${word}`;
    } else {
        timeRelatedGreeting =`Buonasera ${word}`;
    }

    return timeRelatedGreeting;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(timeRelatedGreetingTo(userName));


//Risultato atteso se si passa 'Saverio' alle 18: // Buonasera Saverio.