const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const RegistroSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  role: { type: String, default: "user" },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = RegistroSchema;
