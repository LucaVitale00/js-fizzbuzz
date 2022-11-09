// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che 
// per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli 
// di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 
// stampi “FizzBuzz”.
// ***************************************
// prendiamo una variabile e gli diamo il valore di 100
const numBox = 100;
const fizzBuzz ="fizzbuzz"
const fizz ="fizz"
const buzz = "buzz"

// variabile x la query selector
const miniBox = document.querySelector(".mini-box");
// creiamo un ciclo dando come priorità fizzbuzz e poi gli altri
for (let i = 1; i <= numBox; i++ ){
let color = ""
if (i % 3 === 0 && i % 5 === 0){
    color = "bg-danger"
    miniBox.innerHTML += `<div class="mini-boxs ${ color }"> ${fizzBuzz} </div>`;
      
} else if (i % 5 === 0) {
    color = "bg-success";
    miniBox.innerHTML += `<div class="mini-boxs ${ color }"> ${buzz} </div>`;
} else if (i % 3 === 0) {
    color = "bg-warning"
    miniBox.innerHTML += `<div class="mini-boxs ${ color }"> ${fizz} </div>`;
    
}  else {
    miniBox.innerHTML += `<div class="mini-boxs"> ${i} </div>`;
}


}
