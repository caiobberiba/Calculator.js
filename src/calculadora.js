function SomarDoisNumeros(valor1, valor2) {
  // Soma os dois valores
    const resultado = valor1 + valor2;

  // Retorno do resultado
    return resultado;
}

function MediaDeDoisNumeros(valor1, valor2) { 
  // Soma de todos os valores
  const resultadoSomaDeDoisValores = SomarDoisNumeros(valor1, valor2);
    
  // Divisão pela quantidade de números passados
  const resultadoDaMediaDeDoisValores = resultadoSomaDeDoisValores / 2;

  // Retorno do resultado
  return resultadoDaMediaDeDoisValores;
}

function SubtrairDoisNumeros(valor1, valor2) {
  // Subtrai os dois valores
    const resultado = valor1 - valor2;

  // Retorno do resultado
    return resultado;
}

function MultiplicarDoisNumeros(valor1, valor2) {
  // Multiplica os dois valores
    const resultado = valor1 * valor2;

  // Retorno do resultado
    return resultado;
}

function DividirDoisNumeros(valor1, valor2) {
  // Verifica se o segundo valor é zero
    if (valor2 === 0){
      throw new RangeError('Divisão por zero não permitida'); // retorna erro ao dividir por zero
    }

  // Divide os dois valores
  const resultado = valor1 / valor2;

  // Retorno do resultado com 2 casas decimais
  return Number(resultado.toFixed(2));
}

module.exports = {
  SomarDoisNumeros,
  MediaDeDoisNumeros,
  SubtrairDoisNumeros,
  MultiplicarDoisNumeros,
  DividirDoisNumeros,
};