// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. 

// Abbiamo una lista di invitati alla festa.
const invited = ["marco.rossi@gmail.com", "sara.iacovazzi_35@gmail.com", "giulia.rossi93@gmail.com", "marco.bianchi@libero.it", "sara.verdi@alice.it", "luca.neri@alice.it", "francesca.russo@outlook.it", "andrea.conti@outlook.it"]

console.log(invited.length);


//Devo chiedere all'utente la sua mail tramite un prompt e salvo il risultato in una variabile.
const userMail = prompt("Inserisci qui la tua email.");

// Controllo tramite un ciclo for se la mail digitata è presente nell'array invited.

for (let i = 0; i < invited.length; i++) {
    const thisMail = invited[i];
    if (userMail === thisMail) {
        console.log(userMail, "è presente nella lista degli invitati.");
        break;
    } else {
        console.log(userMail, "non è presente nella lista degli invitati");

    }
}