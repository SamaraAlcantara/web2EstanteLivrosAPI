<div align="center">
<img width="956" height="383" alt="nanobanana-pro-1" src="https://github.com/user-attachments/assets/fe921751-2c76-4383-9921-32f282fa177e" />

# 📚 API ESTANTE DE LIVROS

</div>

### 📑 Sumário
1. [Descrição](#descrição)
   - [Organização de Pastas](#organização-de-pastas)
   - [Arquitetura](#o-arquitetura)
2. [Requisitos](#requisitos)
3. [Funcionalidades](#funcionalidades)
4. [Tecnologias e Recursos](#tecnologias-e-recursos)
5. [Exemplos/Testes](#exemplostestes)

#### 1. Descrição
<p align="justify">
A API **Estante de Livros** foi desenvolvida para simular, em ambiente digital, a organização de uma estante física. Ela permite ao usuário **listar, adicionar, remover, atualizar e classificar** livros já lidos ou que estão na lista de próximas leituras.

Construída com **Node.js** e **Express**, a API organiza e manipula os dados de forma estruturada, utilizando objetos JavaScript e seguindo boas práticas de desenvolvimento.

Na versão atual, o projeto está integrado ao **MongoDB Atlas**, garantindo maior capacidade de armazenamento, persistência e controle dos dados, possibilitando que as informações da estante sejam mantidas de forma segura e escalável.

- **Organização de Pastas**
```
  ├──src/
  |  ├── _tests_
  |    ├── integração
  |      └── rotas.test.js
  |    └── mock
  |      └── dados.mock.js 
  |  ├── auth
  |    └── authUser.js
  |  ├── config
  |    ├── db.js
  |    └── multer.js
  |  ├── controllers
  |    ├── controllerLivros.js
  |    └── controllerUserAuth.js
  |  ├── img
  |  ├── middleware
  |    ├── authToken.js
  |    └── diaValido.js
  |  ├── models
  |    ├── SchemaLivro.js
  |    ├── SchemaRegistro.js
  |    └── SchemaUser.js
  |  ├── pdfs
  |  ├── routes
  |    └── routesEstante.js
  |  ├── services
  |    └── registroUser.js
  |  ├── utils
  |    └── utils.js
  ├── app.js
  ├── server.js
  └── jest.config.js

```
</p>


#### 2. Requisitos

- Conexão com MongoDB
- Rota POST para inserir dados no DB (inclusive imagens)
- Rota GET para exibir os dados armazenados no DB
- Rota PUT para atualizar dados no DB
- Rota DELE para excluir dados do DB
   
#### 3. Funcionalidades

##### 🔐 Login e Autenticação
Após o cadastro, o usuário pode realizar o login para receber um **token JWT**, que permite acessar todas as funcionalidades da API.

##### ➕ Adicionar Livro
Permite inserir um novo livro na estante, incluindo título, autor, categoria, situação e classificação.

##### 🔍 Pesquisar Livro
Busca livros cadastrados através do ID único.

##### ✏️ Atualizar Livro
Atualiza informações de um livro já existente na estante.

##### 📄 Listar Todos os Livros
Retorna todos os livros cadastrados no banco de dados.

##### ⬇️ Download da Lista
Permite baixar a lista completa de livros cadastrados.

##### 🗑️ Deletar Livro
Remove um livro específico da estante pelo seu ID.
 
#### 4. Tecnologias e Recursos

- [**JavaScript**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) — Linguagem utilizada no desenvolvimento da API.
- [**Node.js**](https://nodejs.org/en/docs) — Ambiente de execução para o backend.
- [**Express**](https://expressjs.com/) — Framework para criação das rotas e estrutura da API.
- [**MongoDB Atlas**](https://www.mongodb.com/atlas) — Banco de dados NoSQL utilizado para armazenar os livros.
- [**Jest**](https://jestjs.io/) - Framework de testes JavaScript, projetado para simplificar os testes e facilitar a correção de código JavaScript.
- [**Multer**](https://github.com/expressjs/multer) — Middleware para upload e tratamento de imagens.
- [**JWT (JSON Web Token)**](https://jwt.io/) — Utilizado para autenticação segura dos usuários.
- [**Bcrypt**](https://github.com/kelektiv/node.bcrypt.js) — Biblioteca para criptografia e hashing de senhas.
- [**Git**](https://git-scm.com/doc) — Controle de versão utilizado no desenvolvimento do projeto.
- [**VS Code**](https://code.visualstudio.com/docs) — Editor de código utilizado para desenvolvimento.

#### 5. Exemplos/Testes


