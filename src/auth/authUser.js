const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET;
//geração de token para usuário acessar rotas
function gerarToken(usuario) {
  const payload = {
    id: usuario.id,
    email: usuario.email,
  };
  const options = {
    expiresIn: 60 * 60, //validade do token
  };
  return jwt.sign(payload, secretKey, options);
}

module.exports = { gerarToken, secretKey };
