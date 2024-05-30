const mongoose = require('mongoose');
const { Schema } = mongoose;

const pacienteSchema = new Schema({
  nombre: { type: String, required: true },
  fechaNacimiento: Date,
  genero: String,
  direccion: String,
  telefono: String,
  alergias: [String],
  medicamentos: [String],
});

const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;
