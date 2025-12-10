const express = require("express");
const router = express.Router();
const upload = require("../config/multer.js");
const authControler = require("../controllers/controllerUserAuth.js");
const tokenValido = require("../middleware/authToken.js");
const livroControler = require("../controllers/controllerLivro.js");
const registro = require("../services/registroUser.js");

//Rotas
router.post("/registro", registro);
router.post("/login", authControler.login);

router.get("/listar", tokenValido, livroControler.listar);
router.post("/adicionar", tokenValido,upload.single("imagem"),livroControler.adicionar);
router.delete("/excluir/:id", tokenValido, livroControler.excluir);
router.get("/pesquisar/:id", tokenValido, livroControler.pesquisarID);
router.get("/download", tokenValido, livroControler.downloadLista);
router.put("/atualizar/:id", tokenValido, livroControler.atualizar);

module.exports = router;
