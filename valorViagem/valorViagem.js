/*
Faça um programa para calcular o valor de uma viagem.
Você terá as seguintes variáveis:
    - Preço etanol;
    - Preço gasolina;
    - Tipo de combustível que está no carro;
    - Gasto médio de combustível do carro por KM;
    - Distância em KM da viagem.

Imprima no console o valor que será gasto para realizar está viagem.
*/
const prompt = require('prompt-sync')();

let tipoCombustivel = prompt("Digite o tipo de combustível que irá utilizar na viagem (gasolina ou etanol): ").toLowerCase().trim();

if (tipoCombustivel === 'gasolina' || tipoCombustivel === 'etanol') {
    let precoCombustivel = parseFloat(prompt(`Digite o preço da ${tipoCombustivel}: R$ `).replace(',' , '.'));
    let consumoPorKM = parseFloat(prompt("Qual consumo por KM do seu carro: ").replace(',' , '.'));
    let distancia = parseFloat(prompt("Quantos KM serão percorridos na viagem: ").replace(',' , '.'));

    if (isNaN(precoCombustivel) || isNaN(consumoPorKM) || isNaN(distancia)) {
        console.log("Por favor, insira apenas o valor numérico");
    }else {
        let valorTotalCombustivel = (distancia / consumoPorKM) * precoCombustivel;
        console.log(`O valor total de ${tipoCombustivel} gasto no decorrer da viagem será de R$ ${valorTotalCombustivel.toFixed(2).replace('.' , ',')} reais.`);
    }
}else {
    console.log("Tipo de combustível inválido. Por favor, escolha apenas entre gasolina ou etanol!")
}
