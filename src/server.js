const PORT = 3000;
const mongoose = require("mongoose");
const app = require("./app.js");

const conectarDB = require("./config/db.js");
conectarDB();

/*
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
*/