# Exercício Lógica e Programação (JavaScript)

Esse exercício faz parte das aulas de Lógica e Programação da Mentoria em Testes de Software do Júlio de Lima. O objetivo foi treinar a escrita de funções em JavaScript, implementando funções de somar dois números e de calcular a média desses dois números. Foram criados testes automatizados para ambas as funções utilizando Mocha e Chai, além de testes manuais.

## Funcionalidades

### Soma de Dois Números
Função que recebe dois números e retorna a soma deles.

### Cálculo de Média
  Função que recebe dois números e retorna a média aritmética entre eles.

**Arquivo principal:** `src/calculadora.js`
**Testes:** `test/calculadora.test.js` (testes automatizados com Mocha e Chai para soma e média)
**Configuração:**
  - `package.json` para dependências e scripts
  - `.gitignore` para arquivos ignorados pelo Git

## Estrutura do Projeto

```
logica-e-programacao/
├── src/
│   └── calculadora.js
├── tests/
│   └── calculadora.test.js
├── package.json
└── .gitignore
```

## Como Testar

Os testes automatizados das funções estão no arquivo `test/calculadora.test.js`.

Para executar todos os testes com Mocha, utilize:

```bash
npx mocha tests
```

Ou, para rodar apenas o arquivo de teste específico:

```bash
npx mocha test/calculadora.test.js
```

## Observações

Este exercício é simples e agora conta com testes automatizados para as funções de soma e média, além dos testes manuais.

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

## Contribuição

Sinta-se à vontade para clonar o projeto, sugerir melhorias ou adicionar novos exemplos de funções em JavaScript. Pull requests são bem-vindos!

## Autor

Caio Bêribá

## Licença

Este projeto está sob a licença MIT. Você pode usar, copiar, modificar e distribuir o código livremente.
