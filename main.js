/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/ 

// 1. Creare array di 5 numeri casuali e mostrarli con un Alert
const randomNumbers = [];
do{
    let numbers = Math.floor(Math.random() * 30) + 1;
    if(!randomNumbers.includes(numbers)){
        randomNumbers.push(numbers);
    } 
}while(randomNumbers.length < 5);
alert(randomNumbers)
// 2. Creo una funzione che dopo 30 secondi mi chieda i prompt per inserire i 5 numeri
let userNumbersInput;
setTimeout(function(){
     userNumbersInput = Number(prompt("Inserisci i numeri visualizzati precedentemente!"))
}, 1000*3);




