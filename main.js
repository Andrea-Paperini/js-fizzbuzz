// Creo la variabile numero per ogni numero ripetuto e con la riga 18 lo faccio stampare (solo i numeri che non hanno le condizioni)
var numero;
// Creo la variabile dei numeri con le condizioni
var numeri;
// eguaglio la variabile numeri a numero nel caso in cui una delle seguenti condizioni si verifica
// se è un multiplo di 3 stampare "Fizz"
// se è un multiplo di 5 stampare "Buzz"
// se è sia un multiplo di 3 che di 5 stampare "FizzBuzz"
for (var i = 1; i <= 100; i++) {
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        numero = i;
        numeri = numero;
        console.log("FizzBuzz");
    } else if ((i % 3) == 0) {
        numero = i;
        numeri = numero;
        console.log("Fizz");
    } else if ((i % 5) == 0) {
        numero = i;
        numeri = numero;
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
