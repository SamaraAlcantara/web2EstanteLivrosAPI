const express = require("express");
const mongoose = require("mongoose");
const itemLivro = require("./models/SchemaLivro.js");
//const conectarDB = require('./config/db.js');
//const PORT = 3000;
require("dotenv").config();
//const {midDiaSemana} = require('./middleware/diaValido.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(midDiaSemana);
//conectarDB(); //chama a conexão com o db

app.use("/", require("./routes/routesEstante.js"));

module.exports = app;

/*app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
*/
