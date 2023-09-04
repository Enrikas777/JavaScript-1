// PVM = 21%
var manoSugalvotasPvm = 1357;
var išProcentuIšverstasSkaičius = 0.21;
var pvm = 284.96999999999997;
var suapvalintasPvmIki2SkaičiųPoKablelio = 284.97;
var multi = (manoSugalvotasPvm * išProcentuIšverstasSkaičius);
console.log(multi);
console.log(multi.toFixed(2));

// PrekėsKainaSuPvm
var prekėsKainaBePvm = 150;
var prekėsKainaSuPvm = 434.97;
var sum = (prekėsKainaBePvm + suapvalintasPvmIki2SkaičiųPoKablelio);
console.log(sum);

// Kiek kainuos prekė?
var price = prompt("Kiek kainuos prekė?")
if(price == 434.97) {
        console.log("Teisingai prekės kaina su PVM: " + price + "€")
} else if(price == ""){
        console.log("Neįrašėte jokio skaičiaus. Prekės kaina su PVM: 434.97€")
} else {
        console.log("Neteisingai prekės kaina su PVM ne: " + price + ", o 434.97€")
} 

// While loop isNaN
var price = prompt("Kiek kainuos prekė?")
while(price == "" || isNaN(price)){
        var price = prompt("Kiek kainuos prekė?")
} alert(price)

// Do while loop isNaN
do {
        var price = prompt("Kiek kainuos prekė?")
} while(price == "" || isNaN(price))
        alert(price)













