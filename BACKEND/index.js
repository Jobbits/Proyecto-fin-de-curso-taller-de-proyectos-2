import express from "express";
import cors from 'cors';
import conectarDB from './config/db.js';
import dotenv from "dotenv";
import Tratamiento from './models/Tratamientos.js';

dotenv.config();

const app = express();
//conectar base de datos
conectarDB();

//CORS
app.use(cors());

//servir html
// app.use(static('public'));

//lectura y parseo de body
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Respondío del backend'
    });
})

app.post('/tratamientos', async (req, res) => {
    try {
      const nuevoTratamiento = new Tratamiento(req.body);
      const resultado = await nuevoTratamiento.save();
      res.status(201).json(resultado);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el tratamiento' });
    }
});


//escuchar peticiones
app.listen(PORT, () => {
    console.log("servidor en el puerto" + PORT);
});
