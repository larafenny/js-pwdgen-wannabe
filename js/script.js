// Richiesta nome all'utente
let nameUser = prompt("What's your name?");

// Richiesta cognome all'utente
let surname = prompt("What's your surname?");

// Richiesta colore preferito all'utente
let color = prompt("What's your favourite color?");

// Genero numero a caso
let randomNumber = Math.floor(Math.random() * 100);

// Genero psw come somma di name+surname+color+randomNumber
let psw = nameUser + surname + color + randomNumber;