// Teste Manual da função SomarDoisNumeros
const { SomarDoisNumeros } = require('../src/calculadora');
const resultadoDaSoma = SomarDoisNumeros(5, 3);
console.log(resultadoDaSoma);

// Teste Manual da função CalcularMediaDeDoisNumeros
const { CalcularMediaDeDoisNumeros } = require('../src/calculadora');
const resultadoDaMedia = CalcularMediaDeDoisNumeros(5, 3);
console.log(resultadoDaMedia);

// Testes Automatizados (Função Soma) com Mocha e Chai
const { expect } = require('chai');

describe('Testes da Função de Soma da Calculadora', function () {
   
    it('A função deve ser capaz de somar dois números positivos corretamente', function () {
        const resultadoDaSomaPositiva = SomarDoisNumeros(5, 3); // Coleta o resultado da função
        expect(resultadoDaSomaPositiva).to.equal(8); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de somar dois números negativos corretamente', function () {
        const resultadoDaSomaNegativa = SomarDoisNumeros(-5, -3); // Coleta o resultado da função
        expect(resultadoDaSomaNegativa).to.equal(-8); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de somar um número negativo e um positivo corretamente', function () {
        const resultadoDaSomaMista = SomarDoisNumeros(-5, 3); // Coleta o resultado da função
        expect(resultadoDaSomaMista).to.equal(-2); // Compara o resultado com o valor que você espera
    });
    it('A função deve ser capaz de somar um número com zero corretamente', function () {
        const resultadoDaSomaComZero = SomarDoisNumeros(5, 0); // Coleta o resultado da função
        expect(resultadoDaSomaComZero).to.equal(5); // Compara o resultado com o valor que você espera
    });
});

// Testes Automatizados (Função Média) com Mocha e Chai
describe('Testes da Função de Média da Calculadora', function () {
   
    it('A função deve ser capaz de calcular a média de dois números positivos corretamente', function () {
        const resultadoDaMediaDeDoisNumerosPositivos = CalcularMediaDeDoisNumeros(5, 3); // Coleta o resultado da função
        expect(resultadoDaMediaDeDoisNumerosPositivos).to.equal(4); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de calcular a média de dois números negativos corretamente', function () {
        const resultadoDaMediaDeDoisNumerosNegativos = CalcularMediaDeDoisNumeros(-5, -3); // Coleta o resultado da função
        expect(resultadoDaMediaDeDoisNumerosNegativos).to.equal(-4); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de calcular a média de um número negativo e um positivo corretamente', function () {
        const resultadoDaMediaDeDoisNumerosMisto = CalcularMediaDeDoisNumeros(-5, 3); // Coleta o resultado da função
        expect(resultadoDaMediaDeDoisNumerosMisto).to.equal(-1); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de calcular a média de dois números com zero corretamente', function () {
        const resultadoDaMediaDeDoisNumerosComZero = CalcularMediaDeDoisNumeros(5, 0); // Coleta o resultado da função
        expect(resultadoDaMediaDeDoisNumerosComZero).to.equal(2.5); // Compara o resultado com o valor que você espera
    });
});