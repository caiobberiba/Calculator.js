# Exercício Lógica e Programação (JavaScript)

Esse exercício faz parte das aulas de Lógica e Programação da Mentoria em Testes de Software do Júlio de Lima. O objetivo foi treinar a escrita de funções em JavaScript, implementando várias operações matemáticas básicas e testando seu funcionamento correto. Foram criados testes automatizados utilizando Mocha e Chai, além de testes manuais para verificar o comportamento de cada função.

## Funcionalidades

### Soma de Dois Números
Função que recebe dois números e retorna a soma deles.

### Cálculo de Média
Função que recebe dois números e retorna a média aritmética entre eles.

### Subtração de Dois Números
Função que recebe dois números e retorna o resultado da subtração do primeiro pelo segundo.

### Multiplicação de Dois Números
Função que recebe dois números e retorna o produto da multiplicação entre eles.

### Divisão de Dois Números
Função que recebe dois números e retorna o resultado da divisão do primeiro pelo segundo, com duas casas decimais. Lança um erro do tipo RangeError se tentar dividir por zero.

**Arquivo principal:** `src/calculadora.js`
**Testes:** `test/calculadora.test.js` (testes automatizados com Mocha e Chai para todas as funções)
**Configuração:**
  - `package.json` para dependências e scripts
  - `.gitignore` para arquivos ignorados pelo Git

## Estrutura do Projeto

```
logica-e-programacao/
├── src/
│   └── calculadora.js
├── test/
│   └── calculadora.test.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Como Testar

Os testes automatizados das funções estão no arquivo `test/calculadora.test.js`.

Para executar todos os testes com Mocha, utilize:

```bash
npx mocha test
```

Ou, para rodar apenas o arquivo de teste específico:

```bash
npx mocha test/calculadora.test.js
```

### Tipos de Testes

O projeto contém dois tipos de testes:

1. **Testes Manuais**: Implementados através de `console.log()` para visualização direta dos resultados.
2. **Testes Automatizados**: Implementados com Mocha e Chai, verificando:
   - Soma de diferentes tipos de números
   - Cálculo correto de média
   - Subtração com diferentes valores
   - Multiplicação de números
   - Divisão de números com resultado formatado (2 casas decimais)
   - Tratamento adequado da divisão por zero (deve lançar erro)

## Observações

Este exercício foi expandido para incluir operações matemáticas completas (soma, subtração, multiplicação e divisão) e implementa tratamento de erros na divisão por zero. Todos os testes foram automatizados usando Mocha e Chai.

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/caiobberiba/logica-e-programacao.git
   ```
2. Instale as dependências:
   ```
   npm install
   ```

## Tecnologias Utilizadas

- JavaScript (ES6+)
- Node.js
- Mocha (framework de testes)
- Chai (biblioteca de asserções)

## Contribuição

Sinta-se à vontade para clonar o projeto, sugerir melhorias ou adicionar novos exemplos de funções em JavaScript. Pull requests são bem-vindos!

## Autor

Caio Bêribá

## Licença

Este projeto está sob a licença MIT. Você pode usar, copiar, modificar e distribuir o código livremente.
