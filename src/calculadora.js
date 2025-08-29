function SomarDoisNumeros(valor1, valor2) {
  // Soma os dois valores
    const resultado = valor1 + valor2;

  // Retorno do resultado
    return resultado;
}

function CalcularMediaDeDoisNumeros(valor1, valor2) {
  // Soma de todos os valores
  const resultadoSomaDeDoisValores = SomarDoisNumeros(valor1, valor2);
    
  // Divisão pela quantidade de números passados
  const resultadoDaMediaDeDoisValores = resultadoSomaDeDoisValores / 2;

  // Retorno do resultado
  return resultadoDaMediaDeDoisValores;
}

module.exports = {
  SomarDoisNumeros,
};