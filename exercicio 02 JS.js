let Nome1 = prompt ("Pode me informar seu nome da 1ra pessoa: ");
let idade1 = Number (prompt("Obrigado por informar seu Sobrenome, me informa sua idade: "));
let Nome2 = prompt ("Pode me informar seu nome da 2da pessoa: ");
let idade2 = Number (prompt("Obrigado por informar seu Sobrenome, me informa sua idade: "));
if (idade2 > idade1) {
    console.log( "Registro de " + Nome1 + " e " + Nome2);
    console.log( "A idade de " + Nome1 + " é: " + idade1);
    console.log( "A idade de " + Nome2 + " é: " + idade2);
    console.log( Nome2 + " é mais velho/a que " + Nome1);
}
else {
    console.log( "Registro de " + Nome1 + " e " + Nome2);
    console.log( "A idade de " + Nome1 + " é: " + idade1);
    console.log( "A idade de " + Nome2 + " é: " + idade2);
    console.log( Nome1 + " é mais velho/a que " + Nome2);
}


