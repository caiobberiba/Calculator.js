# 🧮 Calculadora.js

[![Tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)](https://github.com/caiobberiba/logica-e-programacao)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Mocha](https://img.shields.io/badge/testing%20framework-Mocha-8D6748.svg)](https://mochajs.org/)

Uma biblioteca JavaScript modular para operações matemáticas com testes abrangentes. Inicialmente desenvolvida durante a Mentoria em Testes de Software do Júlio de Lima, esta calculadora está em evolução constante com foco em código limpo e testes de alta qualidade.

## 📋 Índice

- [✨ Funcionalidades](#-funcionalidades)
- [🏗️ Estrutura do Projeto](#️-estrutura-do-projeto)
- [🗺️ Roadmap](#️-roadmap)
- [🧪 Testes](#-testes)
- [🚀 Instalação](#-instalação)
- [🔍 Como Usar](#-como-usar)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🤝 Contribuição](#-contribuição)
- [👤 Autor](#-autor)
- [📝 Licença](#-licença)

## ✨ Funcionalidades

| Operação | Descrição | Uso |
|----------|-----------|-----|
| **Soma** | Soma dois números | `SomarDoisNumeros(5, 3)` → `8` |
| **Média** | Calcula média aritmética | `MediaDeDoisNumeros(5, 3)` → `4` |
| **Subtração** | Subtrai o segundo do primeiro | `SubtrairDoisNumeros(5, 3)` → `2` |
| **Multiplicação** | Multiplica dois números | `MultiplicarDoisNumeros(5, 3)` → `15` |
| **Divisão** | Divide com precisão decimal | `DividirDoisNumeros(5, 2)` → `2.50` |

> **Tratamento de Erros:** A função de divisão verifica divisão por zero e lança `RangeError`.

**Arquivo principal:** `src/calculadora.js`
**Testes:** `test/calculadora.test.js` (testes automatizados com Mocha e Chai para todas as funções)
**Configuração:**
  - `package.json` para dependências e scripts
  - `.gitignore` para arquivos ignorados pelo Git

## 🏗️ Estrutura do Projeto

```
calculator.js/
├── src/                  # Código fonte
│   └── calculadora.js    # Implementação das funções matemáticas
├── test/                 # Testes automatizados
│   └── calculadora.test.js  # Testes das funções
├── .github/              # Configurações do GitHub (futuramente)
│   └── workflows/        # GitHub Actions (futuramente)
├── package.json          # Dependências e scripts
├── package-lock.json     # Versões fixas de dependências
└── .gitignore            # Arquivos ignorados pelo Git
```

## 🗺️ Roadmap

Este projeto está em evolução. Alguns recursos planejados:

- [ ] Funções trigonométricas (seno, cosseno, tangente)
- [ ] Cálculos de potência e raiz quadrada
- [ ] Operações com percentuais
- [ ] Interface web simples
- [ ] Melhor documentação com JSDoc
- [ ] Cobertura de testes com relatórios

## 🧪 Testes

O projeto implementa testes rigorosos usando Mocha e Chai.

### Executando os Testes

```bash
# Executar todos os testes
npm test

# Ou diretamente com o Mocha
npx mocha test

# Executar apenas testes específicos
npx mocha test/calculadora.test.js
```

### Tipos de Testes

1. **Testes Manuais**:
   - Simples logs para visualização direta de resultados
   - Úteis para desenvolvimento rápido

2. **Testes Automatizados**:
   - Casos de teste abrangentes para cada função
   - Validação de casos normais e de borda
   - Verificação de tratamento de erro
   - Testes para números positivos, negativos e zero

## 🚀 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/caiobberiba/logica-e-programacao.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd logica-e-programacao
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## 🔍 Como Usar

Importe as funções necessárias em seu projeto JavaScript:

```javascript
const { SomarDoisNumeros, MediaDeDoisNumeros, DividirDoisNumeros } = require('./src/calculadora');

// Exemplos de uso
console.log(SomarDoisNumeros(10, 5));        // 15
console.log(MediaDeDoisNumeros(10, 5));      // 7.5
console.log(DividirDoisNumeros(10, 4));      // 2.50

// Tratamento de erros
try {
   DividirDoisNumeros(10, 0);
} catch (error) {
   console.error(error.message);  // "Divisão por zero não permitida"
}
```

## 🛠️ Tecnologias Utilizadas

- ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg) - Linguagem principal
- ![Node.js](https://img.shields.io/badge/Node.js-Runtime-green.svg) - Ambiente de execução
- ![Mocha](https://img.shields.io/badge/Mocha-Test_Framework-8D6748.svg) - Framework de testes
- ![Chai](https://img.shields.io/badge/Chai-Assertion_Library-red.svg) - Biblioteca de asserções

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Siga estes passos:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcao`)
3. Adicione testes para sua nova funcionalidade
4. Certifique-se de que todos os testes passam
5. Commit suas mudanças (`git commit -m 'Adiciona nova função de cálculo'`)
6. Push para a branch (`git push origin feature/nova-funcao`)
7. Abra um Pull Request

## 👤 Autor

**Caio Bêribá**

- [GitHub](https://github.com/caiobberiba)
- [LinkedIn](https://linkedin.com/in/caioberiba)
- [Medium](https://medium.com/@caioberiba)

## 📝 Licença

Este projeto está sob a [Licença MIT](LICENSE). Veja o arquivo LICENSE para mais detalhes.
