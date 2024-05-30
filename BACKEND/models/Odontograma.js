const mongoose = require('mongoose');
const { Schema } = mongoose;

const odontogramaSchema = new Schema({
  diente: {
    type: String,
    required: true,
  },
  caries: {
    type: Boolean,
    default: false,
  },
  empaste: {
    type: Boolean,
    default: false,
  },
  extraccion: {
    type: Boolean,
    default: false,
  },
  limpieza: {
    type: Boolean,
    default: false,
  },
  ortodoncia: {
    type: Boolean,
    default: false,
  },
  endodoncia: {
    type: Boolean,
    default: false,
  },
  radiografia: {
    type: Boolean,
    default: false,
  },
  observaciones: {
    type: String,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

const Odontograma = mongoose.model('Odontograma', odontogramaSchema);

module.exports = Odontograma;
