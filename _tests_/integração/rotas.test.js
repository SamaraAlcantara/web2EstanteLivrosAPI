process.env.JWT_SECRET = "fake_test_secret";
//Dados mockados para teste
jest.mock("mongoose");

jest.mock("../../models/SchemaLivro.js", () => ({
  find: jest.fn().mockResolvedValue([
    { titulo: "Livro A", autor: "Autor A" },
    { titulo: "Livro B", autor: "Autor B" },
  ]),
  findById: jest.fn().mockResolvedValue({
    _id: "001",
  }),
  create: jest.fn().mockResolvedValue({
    titulo: "Livro C",
    autor: "Autor C",
  }),
  findByIdAndUpdate: jest.fn().mockResolvedValue(
    {_id: "001", titulo: "Livro A", autor: "Autor A"},
  ),

  findByIdAndDelete: jest.fn().mockResolvedValue({
    _id: "001",
  }),
  find: jest.fn().mockResolvedValue([]),
}));

const request = require("supertest");
const jwt = require("jsonwebtoken");

const { secretKey } = require("../../auth/authUser.js");
const app = require("../../app.js");
const { findById, findByIdAndDelete, findByIdAndUpdate } = require("../../models/SchemaLivro.js");

const token = jwt.sign({ id: "123", email: "teste@teste.com" }, secretKey, {
  expiresIn: "1h",
});
//bloco de testes
describe("Teste de Rotas", () => {
  test("Teste LISTAR livros da estante", async () => {
    const response = await request(app)
      .get("/listar")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
});

describe("Teste de Rotas", () => {
  test("Teste ADICIONAR livros na estante", async () => {
    const novoLivro = {
      titulo: "Livro C",
      autor: "Autor C",
    };

    const response = await request(app)
      .post("/adicionar")
      .set("Authorization", `Bearer ${token}`)
      .send(novoLivro);

    expect(response.status).toBe(201);
  });
});

describe("Teste de Rotas", () => {
  test("Teste EXCLUIR livros na estante", async () => {
    const id = "001";

    const response = await request(app)
      .delete(`/excluir/${id}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(201);
  });
});

describe("Teste de Rotas", () => {
  test("Teste PESQUISAR livros na estante", async () => {
    const id = "001";

    const response = await request(app)
      .get(`/pesquisar/${id}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(201);
  });
});

describe("Teste de Rotas", () => {
  test("Teste ATUALIZAR livo na estante", async()=>{
    const atualizacaoLivro = {
      _id: "002",
      titulo: "Livro C",
      autor: "Autor C",
    };
    const id = "001";
    const response = await request(app)
      .put(`/atualizar/${id}`)
      .set("Authorization", `Bearer ${token}`)
      .send(atualizacaoLivro);

    expect(response.status).toBe(201);


  });
});
