const User = require("../models/SchemaUser.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { gerarToken } = require("../auth/authUser.js");


async function registro(req, res) {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ erro: "Campos são obrigatórios." });
    }

    const emailExiste = await User.findOne({ email });
    if (emailExiste) {
      return res.status(400).json({ erro: "Email já cadastrado." });
    }

    // Criptografa senha
    const senhaHash = await bcrypt.hash(senha, 10);

    // Cria usuário
    const novoUser = await User.create({
      nome,
      email,
      senha: senhaHash,
    });
    const token = gerarToken(novoUser);

    return res.status(201).json({
      mensagem: "Usuário registrado com sucesso.",
      user: {
        id: novoUser._id,
        nome: novoUser.nome,
        email: novoUser.email,
      },
      token,
    });
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    return res.status(500).json({ erro: "Erro ao registrar usuário." });
  }
}

module.exports = registro;
