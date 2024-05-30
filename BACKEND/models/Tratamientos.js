import mongoose from 'mongoose';
const { Schema } = mongoose;

const tratamientoSchema = new Schema({
  fecha: { type: Date, default: Date.now },
  tratamiento: String,
  pieza: String,
  cara: String,
  notas: String,
});

const Tratamiento = mongoose.model('Tratamiento', tratamientoSchema);

export default Tratamiento;
