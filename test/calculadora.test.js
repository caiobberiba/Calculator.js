// Teste Manual (Função Soma)
const { SomarDoisNumeros } = require('../src/calculadora');
const resultadoDaSoma = SomarDoisNumeros(5, 3);
console.log(resultadoDaSoma);

// Teste Manual (Função Média)
const { MediaDeDoisNumeros } = require('../src/calculadora');
const resultadoDaMedia = MediaDeDoisNumeros(5, 3);
console.log(resultadoDaMedia);

// Teste Manual (Função Subtração)
const { SubtrairDoisNumeros } = require('../src/calculadora');
const resultadoDaSubtracao = SubtrairDoisNumeros(5, 3);
console.log(resultadoDaSubtracao);

//Teste Manual (Função Multiplicação)
const { MultiplicarDoisNumeros } = require('../src/calculadora');
const resultadoDaMultiplicacao = MultiplicarDoisNumeros(5, 3);
console.log(resultadoDaMultiplicacao);

//Teste Manual (Função Divisão)
const { DividirDoisNumeros } = require('../src/calculadora');
const resultadoDaDivisao = DividirDoisNumeros(5, 3);
console.log(resultadoDaDivisao);

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
        const resultadoDaSomaMista1 = SomarDoisNumeros(-5, 3); // Coleta o resultado da função
        expect(resultadoDaSomaMista1).to.equal(-2); // Compara o resultado com o valor que você espera
    });
    
    it('A função deve ser capaz de somar um número positivo e um negativo corretamente', function () {
        const resultadoDaSomaMista2 = SomarDoisNumeros(5, -3); // Coleta o resultado da função
        expect(resultadoDaSomaMista2).to.equal(2); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de somar zero de um número corretamente', function () {
        const resultadoDaSomaZeroComUmNumero = SomarDoisNumeros(0, 5); // Coleta o resultado da função
        expect(resultadoDaSomaZeroComUmNumero).to.equal(5); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de somar dois números zerados corretamente', function () {
        const resultadoDaSomaZerada = SomarDoisNumeros(0, 0); // Coleta o resultado da função
        expect(resultadoDaSomaZerada).to.equal(0); // Compara o resultado com o valor que você espera
    });
});

// Testes Automatizados (Função Subtração) com Mocha e Chai
describe('Testes da Função de Subtração da Calculadora', function () {

    it('A função deve ser capaz de subtrair dois números positivos corretamente', function () {
        const resultadoDaSubtracaoPositiva = SubtrairDoisNumeros(5, 3); // Coleta o resultado da função
        expect(resultadoDaSubtracaoPositiva).to.equal(2); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de subtrair dois números negativos corretamente', function () {
        const resultadoDaSubtracaoNegativa = SubtrairDoisNumeros(-5, -3); // Coleta o resultado da função
        expect(resultadoDaSubtracaoNegativa).to.equal(-2); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de subtrair um número negativo de um positivo corretamente', function () {
        const resultadoDaSubtracaoMista1 = SubtrairDoisNumeros(-5, 3); // Coleta o resultado da função
        expect(resultadoDaSubtracaoMista1).to.equal(-8); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de subtrair um número positivo de um negativo corretamente', function () {
        const resultadoDaSubtracaoMista2 = SubtrairDoisNumeros(5, -3); // Coleta o resultado da função
        expect(resultadoDaSubtracaoMista2).to.equal(8); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de subtrair zero de um número corretamente', function () {
        const resultadoDaSubtracaoZeroDeUmNumero = SubtrairDoisNumeros(5, 0); // Coleta o resultado da função
        expect(resultadoDaSubtracaoZeroDeUmNumero).to.equal(5); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de subtrair um número de zero corretamente', function () {
        const resultadoDaSubtracaoUmNumeroDeZero = SubtrairDoisNumeros(0, 5); // Coleta o resultado da função
        expect(resultadoDaSubtracaoUmNumeroDeZero).to.equal(-5); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de subtrair dois números zerados corretamente', function () {
        const resultadoDaSubtracaoDeDoisZeros = SubtrairDoisNumeros(0, 0); // Coleta o resultado da função
        expect(resultadoDaSubtracaoDeDoisZeros).to.equal(0); // Compara o resultado com o valor que você espera
    });
});

// Testes Automatizados (Função Média) com Mocha e Chai
describe('Testes da Função de Média da Calculadora', function () {
   
    it('A função deve ser capaz de calcular a média de dois números positivos corretamente', function () {
        const resultadoDaMediaDeDoisNumerosPositivos = MediaDeDoisNumeros(5, 3); // Coleta o resultado da função
        expect(resultadoDaMediaDeDoisNumerosPositivos).to.equal(4); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de calcular a média de dois números negativos corretamente', function () {
        const resultadoDaMediaDeDoisNumerosNegativos = MediaDeDoisNumeros(-5, -3); // Coleta o resultado da função
        expect(resultadoDaMediaDeDoisNumerosNegativos).to.equal(-4); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de calcular a média de um número negativo e um positivo corretamente', function () {
        const resultadoDaMediaDeDoisNumerosMisto1 = MediaDeDoisNumeros(-5, 3); // Coleta o resultado da função
        expect(resultadoDaMediaDeDoisNumerosMisto1).to.equal(-1); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de calcular a média de um número positivo e um negativo corretamente', function () {
        const resultadoDaMediaDeDoisNumerosMisto2 = MediaDeDoisNumeros(5, -3); // Coleta o resultado da função
        expect(resultadoDaMediaDeDoisNumerosMisto2).to.equal(1); // Compara o resultado com o valor que você espera
    });
    
    it('A função deve ser capaz de calcular a média de um número com zero corretamente', function () {
        const resultadoDaMediaDeUmNumeroComZero = MediaDeDoisNumeros(5, 0); // Coleta o resultado da função
        expect(resultadoDaMediaDeUmNumeroComZero).to.equal(2.5); // Compara o resultado com o valor que você espera
    });
    it('A função deve ser capaz de calcular a média de dois zeros corretamente', function () {
        const resultadoDaMediaDeDoisZeros = MediaDeDoisNumeros(0, 0); // Coleta o resultado da função
        expect(resultadoDaMediaDeDoisZeros).to.equal(0); // Compara o resultado com o valor que você espera
    });
});

//Testes Automatizados (Função Multiplicação) com Mocha e Chai
describe('Testes da Função de Multiplicação da Calculadora', function () {
    it('A função deve ser capaz de multiplicar dois números positivos corretamente', function () {
        const resultadoDaMultiplicacaoPositiva = MultiplicarDoisNumeros(5, 3); // Coleta o resultado da função
        expect(resultadoDaMultiplicacaoPositiva).to.equal(15); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de multiplicar dois números negativos corretamente', function () {
        const resultadoDaMultiplicacaoNegativa = MultiplicarDoisNumeros(-5, -3); // Coleta o resultado da função
        expect(resultadoDaMultiplicacaoNegativa).to.equal(15); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de multiplicar um número negativo (ou positivo) por um positivo (ou negativo) corretamente', function () {
        const resultadoDaMultiplicacaoMista = MultiplicarDoisNumeros(-5, 3); // Coleta o resultado da função
        expect(resultadoDaMultiplicacaoMista).to.equal(-15); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de multiplicar um número por zero corretamente', function () {
        const resultadoDaMultiplicacaoPorZero = MultiplicarDoisNumeros(5, 0); // Coleta o resultado da função
        expect(resultadoDaMultiplicacaoPorZero).to.equal(0); // Compara o resultado com o valor que você espera
    });
});

//Testes Automatizados (Função Divisão) com Mocha e Chai
describe('Testes da Função de Divisão da Calculadora', function () {
    it('A função deve ser capaz de dividir dois números positivos corretamente', function () {
        const resultadoDaDivisaoPositiva = DividirDoisNumeros(6, 3); // Coleta o resultado da função
        expect(resultadoDaDivisaoPositiva).to.equal(2); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de dividir dois números negativos corretamente', function () {
        const resultadoDaDivisaoNegativa = DividirDoisNumeros(-6, -3); // Coleta o resultado da função
        expect(resultadoDaDivisaoNegativa).to.equal(2); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de dividir um número negativo (ou positivo) por um positivo (ou negativo) corretamente', function () {
        const resultadoDaDivisaoMista = DividirDoisNumeros(-6, 3); // Coleta o resultado da função
        expect(resultadoDaDivisaoMista).to.equal(-2); // Compara o resultado com o valor que você espera
    });      
    
    it('A função deve ser capaz de dividir um número por um número decimal corretamente', function () {
        const resultadoDaDivisaoPorDecimal = DividirDoisNumeros(5, 2); // Coleta o resultado da função
        expect(resultadoDaDivisaoPorDecimal).to.equal(2.5); // Compara o resultado com o valor que você espera
    });

    it('A função deve ser capaz de dividir zero por um número corretamente', function () {
        const resultadoDaDivisaoDeZeroPorUmNumero = DividirDoisNumeros(0, 5); // Coleta o resultado da função
        expect(resultadoDaDivisaoDeZeroPorUmNumero).to.equal(0); // Compara o resultado com o valor que você espera
    });

    it('A função deve lançar um erro ao dividir qualquer número (positivo, negativo ou zero) por zero', function () {
        expect(function() {
            DividirDoisNumeros(-25, 0); // Coleta o resultado da função
        }).to.throw(RangeError, 'Divisão por zero não permitida'); // Compara o resultado com o valor que você espera
    });
});

// Para rodar os testes, utilize o comando: npx mocha test/calculadora.test.js
// Certifique-se de que o Mocha e o Chai estão instalados no seu projeto
// Você pode instalar com: npm install mocha chai --save-dev