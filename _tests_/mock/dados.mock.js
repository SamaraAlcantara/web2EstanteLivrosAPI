//const controllerUserAuth = require("../controllers/controllerUserAuth.js");
test("Mock funcionando", () => {
  expect(true).toBe(true);
});


module.exports = {
  connect: jest.fn(),
  model: jest.fn().mockReturnValue({}),
  Schema: jest.fn(),
};

/*

jest.mock("");
//bloco de teste - DESCRIBE
describe("Teste controllerUser", () => {
  //declaração do test - IT / TEST
  test("Validação de Login", async () => {
    const request = {
      body: {
        nome: "Joaquina Silva",
        email: "joaquina123@mail.com",
        senha: "000005",
      },
    };
    //função moks => permite a simulação da execução e retorno da funcionalidade
    const reply = {
      code: jest.fn().mockRetunsThis(),
      send: Jest.fn()
    };
    await controllerUserAuth.login(request, reply);
  });

  //valida se o resultado é o que se estava esperando - EXPECT
  expect();
});*/
