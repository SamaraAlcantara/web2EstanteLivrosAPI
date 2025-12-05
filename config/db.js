const { mongoose } = require("mongoose");
//conexão com db
function conectarDB() {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Conexão com DB realizada.");
  } catch (error) {
    console.log("Erro ao conectar com Banco de Dados", error);
  }
}

module.exports = conectarDB;
