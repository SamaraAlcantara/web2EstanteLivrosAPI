function midDiaSemana(req, rest, next) {
  const diaSemana = new Date().getDay();
  if (diaSemana === 0 || diaSemana === 6) {
    return rest.status(403).json({
      msg: "Acesso permitido apenas de Segunda á Sexta.",
    });
  }
  next();
}

module.exports = { midDiaSemana};