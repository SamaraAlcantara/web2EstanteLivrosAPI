//const controllerUserAuth = require("../controllers/controllerUserAuth.js");
test("Mock funcionando", () => {
  expect(true).toBe(true);
});


module.exports = {
  connect: jest.fn(),
  model: jest.fn().mockReturnValue({}),
  Schema: jest.fn(),
};

