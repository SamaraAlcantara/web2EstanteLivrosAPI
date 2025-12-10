const jwt = require("jsonwebtoken");
const {secretKey} = require('../auth/authUser.js');


function tokenValido(req, res, next) {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({
      error: "Acesso negado",
    });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decodificar = jwt.verify(token, secretKey);
    req.usuario = decodificar;
    next();
  } catch (error) {
    res.status(404).json({
      error: "Token inválido",
    });
  }
}

module.exports = tokenValido;

