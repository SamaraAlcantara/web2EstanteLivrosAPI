const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const modeloUser = new Schema(
  {
    nome: String,
    email: { type: String, unique: true },
    senha: String,
  },
  { timestamps: true }
);



module.exports = mongoose.model("User", modeloUser);

