let Pessoas = []

while (true) {
    let nome = prompt ('Pode me informar o nome da pessoa:')

    let idade 
    while (true) {
        idade = Number(prompt('Qual é a idade da pessoa'))
        if (! Number.isNaN(idade)) {
            break // detener while se não foi um numero
        }
        alert ('Por favor digite um numero')
    }

    let pessoa = {
         nome, idade
    }

    Pessoas.push(pessoa)

    let add = confirm('Deseja fazer outro registro')
    if (add === false) {
        break // detener adicionar mais pessoas
    }
}

let MaisVelhos = obterMaisVelhos(Pessoas) //pessoa o pessoas mais velha

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

console.log ('Las personas registrada foram:')
console.log (' ')
for (registro of Pessoas) {
    console.log (`${registro.nome} que tem ${registro.idade} anos`)
}
if (MaisVelhos.length > 1) {
    for (registro of MaisVelhos) {
        console.log (`${registro.nome} `)
    }
    console.log (`São os maiores com ${registro.idade}`)
    console.log (' ')
}

else {
    for (registro of MaisVelhos) {
        console.log (`${registro.nome} foi o mais velho com ${registro.idade}` )
    }
    
}