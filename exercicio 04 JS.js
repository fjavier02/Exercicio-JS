let Pessoas = []


let pessoa = {
        nome, idade
}
let mayores = []
let registro = []

function adicionarDado() {
    let nome = document.querySelector("#nome");
    let idade = document.querySelector("#idade");
    console.log(nome);
    console.log(idade);
    let pessoa = {
        nome: nome.value,
        idade:idade.value
    }
    console.log(pessoa);
    Pessoas.push(pessoa);
    let persona = document.createElement("li");
    console.log(persona);
    persona.innerHTML = `${pessoa.nome} tiene ${pessoa.idade}`;
    let lista = document.querySelector("#lista");
    lista.appendChild(persona);
    console.log(lista);
    mayores = obterMaisVelhos(Pessoas);
    console.log(mayores);
   
    //let mayor = document.createElement("p");
    //mayor.innerHTML = `${mayores.nome} tiene ${mayores.idade}`; 
    registro = mayores [0];
    console.log(registro);
    console.log(document.querySelector("#comparacion"));
    let pessoasMaisVelhas = document.querySelector("#comparacion");
    pessoasMaisVelhas.innerHTML = `${registro.nome} foi o mais velho com ${registro.idade}`


    /* document.querySelector('#comparacion').removefirstChild.appendChild(pessoasMaisVelhas); */
    
/*    if (mayores.length > 1) {
        for (registro of mayores ) {
            let pessoasMaisVelhas = document.createElement('p') //mostrar lista das pessoas mais velhas
            pessoasMaisVelhas.innerHTML = `A pessoa mais velhas são ${registro.nome} com ${registro.idade} anos <br>`
        }
        let pessoasMaisVelhas = document.createElement('p') //mostrar idade das pessoas mais velhas
        pessoasMaisVelhas.innerHTML = `${registro.nome} ` 
    }
    
    else {
        
        resultado.appendChild(pessoasMaisVelhas) 
        //console.log (`${registro.nome} foi o mais velho com ${registro.idade}` 
        
    }*/
}

 //pessoa o pessoas mais velha

function obterMaisVelhos() {
    let MaisVelhos = [ Pessoas[0] ] //igualar al primer valor de Pessoas
    for(let registro of Pessoas.slice(1)) { // comparar con los demas valores de Pessoas
        if (registro.idade > MaisVelhos[0].idade) { //si es mayor igual al valor
            MaisVelhos = [ registro ]
        }
        else if (registro.idade === MaisVelhos[0].idade) { //si es igual adiciona 
            MaisVelhos.push(registro)
        }
        //console.log(registro);
    }
    return MaisVelhos
}


function limparDados() {
    resultado.innerHTML = ' <br> <h3> Registro: </h3> </br><br> <ul id="lista"> </ul> </br><br> <p id="comparacion"></p> </br>' ; //restablece os valores de la sección como estan en HTML  
    while (Pessoas.length !== 0) { //reseteando lista de personas
        Pessoas.pop();
    }
}


/* if (MaisVelhos.length > 1) {
    for (registro of MaisVelhos) {
        let pessoasMaisVelhas = document.createElement('p') //mostrar lista das pessoas mais velhas
        pessoasMaisVelhas.textContent = `São os maiores com ${registro.idade}`
        resultado.appendChild(pessoasMaisVelhas)
        //console.log (`${registro.nome} `)
    }
    let pessoasMaisVelhas = document.createElement('p') //mostrar idade das pessoas mais velhas
    pessoasMaisVelhas.textContent = `${registro.nome} `
    resultado.appendChild(pessoasMaisVelhas)

}

else {
    for (registro of MaisVelhos) {
        let pessoasMaisVelhas = document.createElement('p') //mostrar nome e idade da pessoa mais velha
        pessoasMaisVelhas.textContent = `${registro.nome} foi o mais velho com ${registro.idade}`
        resultado.appendChild(pessoasMaisVelhas)    
        //console.log (`${registro.nome} foi o mais velho com ${registro.idade}` )
    }
    
} */
