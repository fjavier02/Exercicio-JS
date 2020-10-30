//document.querySelector('#resultado') //para seleccionar la sección de resultado
//let resultado = document.querySelector('#resultado')

//resultado.innerHTML = '<br> agora soy um paragrafo </br>' //modifica el valos del div para gregar resultado

/* let novaPessoa = document.createElement('li') //agregar nuevos nombres a la lista
novaPessoa.textContent = 'dado de pessoa'
resultado.appendChild(novaPessoa) */

/* let pessoasMaisVelhas = document.createElement('p') //agregar os dados das pessoas mais valhas
pessoasMaisVelhas.textContent = 'dado de pessoa'
resultado.appendChild(pessoasMaisVelhas) */

let Pessoas = []


/* let nome = document.querySelector('#Nome') 

let idade 
    while (true) {
    idade = Number(document.querySelector('#idade'))
     if (! Number.isNaN(idade)) {
        break // detener while se não foi um numero
    }
    alert ('Por favor digite um numero') 
}*/

let pessoa = {
        nome, idade
}

function adicionarDado() {
    let nome = document.querySelector("#nome");
    let idade = document.querySelector("#idade");
    console.log(nome);
    console.log(idade);
    pessoa.nome = nome.value;
    pessoa.idade = idade.value;
    console.log(pessoa);
    Pessoas.push(pessoa);
    let persona = document.createElement("li");
    console.log(persona);
    persona.innerHTML = `${pessoa.nome} tiene ${pessoa.idade}`;
    let lista = document.querySelector("#lista");
    lista.appendChild(persona);
    console.log(lista);
    let MaisVelhos = obterMaisVelhos(Pessoas)
}

 //pessoa o pessoas mais velha

function obterMaisVelhos(Pessoas) {
    let MaisVelhos = [ Pessoas[0] ]
    for(let registro of Pessoas.slice(1)) {
        if (registro.idade > MaisVelhos[0].idade) {
            MaisVelhos = [ registro ]
        }
        else if (registro.idade === MaisVelhos[0].idade) {
            MaisVelhos.push(registro)
        }
    }
    return MaisVelhos
}


function limparDados() {
    resultado.innerHTML = '<h3> Registro2: </h3>' ;

}
//console.log ('Las personas registrada foram:')
//console.log (' ')


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

    /* console.log (`São os maiores com ${registro.idade}`)
    console.log (' ') */
//}


/* else {
    for (registro of MaisVelhos) {
        let pessoasMaisVelhas = document.createElement('p') //mostrar nome e idade da pessoa mais velha
        pessoasMaisVelhas.textContent = `${registro.nome} foi o mais velho com ${registro.idade}`
        resultado.appendChild(pessoasMaisVelhas)    
        //console.log (`${registro.nome} foi o mais velho com ${registro.idade}` )
    }
    
} */