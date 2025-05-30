// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

const userNumber = Math.floor(Math.random() * 7) + 1;
const computerNumber = Math.floor(Math.random() * 7) + 1;


// Creo un ciclo for in modo da far generare un numero di volte che stabilisco io, due numeri random, compresi tra 1 e 6. Una volta generati stabilire anche il vincitore in base al numero più alto.

for (i = 1; i <= 1; i++) {
    console.log(userNumber, computerNumber);
    if (userNumber > computerNumber) {
        console.log("Complimenti! Hai vinto, giocatore!");

    } else {
        console.log("Questa volta ha vinto il computer!");

    }
}