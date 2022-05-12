const playButton = document.querySelector(".btn");
let buttonClicked = false;

playButton.addEventListener('click', function(){
    document.getElementById("section-cpu-numbers").style.display = "block";
    buttonClicked = true;
});

const randomNumbers = [];
do{
    let numbers = Math.floor(Math.random() * 30) + 1;
    if(!randomNumbers.includes(numbers)){
        randomNumbers.push(numbers);
    } 
}while(randomNumbers.length < 5);

const cpuNumbers = document.querySelector(".cpu-numbers");
cpuNumbers.append(randomNumbers)

setTimeout(function(){
    document.getElementById("section-cpu-numbers").style.display = "none";

    if(buttonClicked == true){
        const userNumbersArray = [];
        const compatibleNumbers = [];
        setTimeout(function(){
            for(let i = 0; i < 5; i++){
                const userNumbersInput = Number(prompt("Inserisci i numeri visualizzati precedentemente! (UNO ALLA VOLTA) "));
                userNumbersArray.push(userNumbersInput);
            };    

            for(let i = 0; i < randomNumbers.length; i++){
                for(let k = 0; k < userNumbersArray.length; k++){
                    if(randomNumbers[i] === userNumbersArray[k]){
                        compatibleNumbers.push(userNumbersArray[k]);
                    }
                }
            }

            const tentativi = document.querySelector(".uno");
            const memorizzare = document.querySelector(".due");
            const userImputNumber = document.querySelector(".tre");

            tentativi.innerText = `Hai indovinato: ${compatibleNumbers.length} numeri`
            memorizzare.innerText = `Numeri che dovevi memorizzare: ${randomNumbers}`
            userImputNumber.innerText = `Numeri inseriti: ${userNumbersArray}`

            console.log("I numeri che hai indovinato sono:",compatibleNumbers.length);
            console.log("Numeri da memorizzare:",randomNumbers);
            console.log("Numeri inseriti", userNumbersArray);
        }, 1000*5);

    }    
},1000*5);


// // 2. Creo una funzione che dopo 30 secondi mi chieda i prompt per inserire i 5 numeri
// const userNumbersArray = [];
// const compatibleNumbers = [];
// setTimeout(function(){
//     for(let i = 0; i < 5; i++){
//         let userNumbersInput = Number(prompt("Inserisci i numeri visualizzati precedentemente! (UNO ALLA VOLTA) "));
//         userNumbersArray.push(userNumbersInput);
//     };    

//     for(let i = 0; i < randomNumbers.length; i++){
//         if(!userNumbersArray.includes(randomNumbers[i])){
//             compatibleNumbers.push(randomNumbers[i]);
//         }
//     }

//     console.log("I numeri che hai indovinato sono:",compatibleNumbers.length);
//     console.log("Numeri da memorizzare:", String(randomNumbers));
//     console.log("Numeri inseriti", String(compatibleNumbers));
// }, 1000*1);









