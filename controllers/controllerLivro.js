const Livro = require("../models/SchemaLivro");
//funções de manipulação dos livros
async function listar(req, res) {
  const livros = await Livro.find();
  res.json(livros);
}

async function adicionar(req, res) {
  const livro = await Livro.create(req.body);
  res.status(201).json({
    mens: `O livro ${livro.titulo} adicionado a estante`,
    livro,
  });
}

async function excluir(req, res) {
  const id = req.params.id; //busca pelo id

  //verifica se o id existe
  if (!id) {
    return res.status(404).json({
      mens: `Livro não encontrado na estante`,
    });
  }
  const livro = await Livro.findByIdAndDelete(id); //utiliza o método para localizar pelo ir e excluir
  res.json({ mens: `Livro ${livro.titulo} excluído da estante.` });
}


async function pesquisarID(req, res) {
  const { id } = req.params;
  const livro = await Livro.findById(id);//busca no db pelo is

  if (!livro) {
    return res.status(404).json({
      mens: "Livro não encontrado",
    });
  }
  res.json(livro);
}

module.exports = { listar, adicionar, excluir, pesquisarID };
