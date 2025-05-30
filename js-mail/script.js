// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. 

// Abbiamo una lista di invitati alla festa.
const invited = ["marco.rossi@gmail.com",        // 0
    "sara.iacovazzi_35@gmail.com",  //1
    "giulia.rossi93@gmail.com",     //2
    "marco.bianchi@libero.it",      //3
    "sara.verdi@alice.it",          //4
    "luca.neri@alice.it",           //5
    "francesca.russo@outlook.it",   //6
    "andrea.conti@outlook.it",      //7
    "elena.mancini@outlook.com"]     //8


console.log(invited.length);

//Devo chiedere all'utente la sua mail tramite un prompt e salvo il risultato in una variabile.
const userMail = prompt("Inserisci qui la tua email.");

// Controllo tramite un ciclo for se la mail digitata è presente nell'array invited.

for (let i = 0; i < invited.length; i++) {
    const thisMail = invited[i];
    if (userMail === thisMail) {
        console.log(userMail, "è presente nella lista degli invitati.");
        break;
    }
    else {
        console.log(userMail, "non è presente nella lista degli invitati");

    }
}