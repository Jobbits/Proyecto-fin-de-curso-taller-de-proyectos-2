const mongoose = require('mongoose');
const { Schema } = mongoose;

const radiografiaSchema = new Schema({
  fechaRadiografia: { type: Date, default: Date.now },
  tipo: String,
  diente: String,
  observaciones: String,
});

const Radiografia = mongoose.model('Radiografia', radiografiaSchema);

module.exports = Radiografia;
