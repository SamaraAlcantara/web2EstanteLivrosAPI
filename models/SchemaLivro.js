const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const modeloEstante = new Schema(
  {
    titulo: String,
    autor: String,
    estante: String,
    situacao: String,
    classificacao: Number,
  },
);

const itemLivro = model("Livro", modeloEstante);
module.exports = itemLivro;
