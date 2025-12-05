const user = require("../models/SchemaUser.js");
const bcrypt = require("bcryptjs");//criptografia da senha
const { gerarToken } = require("../auth/authUser.js");
const registroUser = require("../services/registroUser.js");

//função para criar o usuário no banco de dados
async function registro(req, res) {
  try {
    const usuario = await registroUser(req.body);
    return res.status(201).json(usuario);
  } catch (error) {
    return res.status(400).json({
      erro: error.mens,
    });
  }
}

async function login(req, res) {
  const { email, senha } = req.body;
  const usuario = await user.findOne({ email });

  if (!usuario) {
    return res.status(401).json({
      mens: "Usuário não cadastrado",
    });
  }
  const senhaValida = await bcrypt.compare(senha, usuario.senha);

  if (!senhaValida) {
    return res.status(401).json({
      mens: "Email ou senha incorretos ou inválidos",
    });
  }

  const token = gerarToken(usuario);
  res.status(200).json({
    success: true,
    mens: "Login realizado com sucesso",
    token,
  });
}

module.exports = { registro, login };
