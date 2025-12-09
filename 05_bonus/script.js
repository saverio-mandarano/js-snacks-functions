/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/
const name = 'Saverio';


// Dichiara la funzione qui.
function timeRelatedGreetingTo (userName){

    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();
    const currentTime = `Current Time: ${currentHours}:${currentMinutes}:${currentSeconds}`;

    let greeting;
    if (currentHours >= 4 && currentHours < 13) {
        greeting = `Buongiorno ${userName}`;
    } else if (currentHours >= 13 && currentHours < 17) {
        greeting = `Buon pomeriggio ${userName}`;
    } else {
     greeting =`Buonasera ${userName}`;
    }

    return {
        time: currentTime, greeting: greeting
    };
}


// Invoca la funzione qui e stampa il risultato in console
console.log(timeRelatedGreetingTo(name));


//Risultato atteso se si passa 'Saverio' alle 18: // Buonasera Saverio.