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
5. [Testes](#testes)
6. [Conclusão](#conclusão)

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
  |  ├── app.js
  |  ├── server.js
  |  └── jest.config.js

```

- **Arquitetura**
  
<img width="441" height="411" alt="Diagrama sem nome drawio" src="https://github.com/user-attachments/assets/c0aec9db-5914-45fc-bcae-dad61ec44db8" />

- Usuário → envia dados para login e validação → A **API** após validação dos dados devolve token (JWT) de acesso para o usuário
- Com o token de acesso, o usuário abre requisição para os serviços da API → Os dados são cbuscados no **MongoDB Atlas (AWS)**  
- O MongoDB Atlas → devolve dados conforme solicitado → retorno de resposta ao usuário

</p>


#### 2. Requisitos

- Conexão com MongoDB
- Rota POST para inserir dados no DB (inclusive imagens)
- Rota GET para exibir os dados armazenados no DB
- Rota PUT para atualizar dados no DB
- Rota DELETE para excluir dados do DB
   
#### 3. Funcionalidades

##### 🔐 Login e Autenticação
Após o cadastro, o usuário pode realizar o login para receber um **token JWT**, que permite acessar todas as funcionalidades da API.
<img width="919" height="512" alt="rota login" src="https://github.com/user-attachments/assets/9a20cefe-6fd5-4d28-9888-eee68549f5ef" />
- A senha é criptografada com a utilização da biblioteca **bcryptjs**. Com a validação do usuário, o mesmo recebe o token de acesso no formato JWT.

##### ➕ Adicionar Livro
Permite inserir um novo livro na estante, incluindo título, autor, categoria, situação e classificação.
![rota adicionar com imagem](https://github.com/user-attachments/assets/4900d423-c210-4856-b617-b5f144416d58)
- O usuário tem a opção de inserir o item com ou sem imagem. A imagem é salva em buffer (formato array de bytes).
- Para permitir o envio da imagem (arquivo) foi utilizado o middleware Multer, que permite adicionar um objeto file no body da requisição.

##### 🔍 Pesquisar Livro
Busca livros cadastrados através do ID único.
![rota pesquisar](https://github.com/user-attachments/assets/7bb36a14-e858-4085-ba3f-341961b242ff)

##### ✏️ Atualizar Livro
Atualiza informações de um livro já existente na estante.
![rota atualizar](https://github.com/user-attachments/assets/a9594cbf-7196-4415-a5e9-007fbda1dd1a)

##### 📄 Listar Todos os Livros
Retorna todos os livros cadastrados no banco de dados.
![rota listar](https://github.com/user-attachments/assets/e74a32dd-950f-4dae-bf76-eeb9a6d9a9e9)

##### ⬇️ Download da Lista
Permite baixar a lista completa de livros cadastrados.
![rota download](https://github.com/user-attachments/assets/b1831302-c1df-485c-8676-79276501af9f)

##### 🗑️ Deletar Livro
Remove um livro específico da estante pelo seu ID.
![rota delete](https://github.com/user-attachments/assets/726099f3-f568-4668-995a-0e60ec9be87b)

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

#### 5. Testes

- Os testes unitários foram realizados utilizando o frameworks Jest, com uma estrutura de dados mockados para que o fluxo fosse mais eficiênte.
  
![dados mockados](https://github.com/user-attachments/assets/faac78e8-9604-47f4-a298-593d1cf4f06c)   ![teste jest](https://github.com/user-attachments/assets/a7740cc3-dc3b-4694-9dd0-44cd8e756329)

#### 🏁 6. Conclusão

A aplicação foi desenvolvida como requisito de avaliação da disciplina de Projeto de Sistemas Web II.

A arquitetura escolhida objetivou a fácil manutenção, escalabilidade e integração com novos módulos, garantindo que futuras melhorias possam ser implementadas sem dificuldades.

#### Autora: Samara Oliveira Alcantara







