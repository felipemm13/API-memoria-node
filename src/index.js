const express = require('express');
const mongoose = require('mongoose');
const usuariosRouter = require('./routes/usuarios');

const app = express();
const port = 3000;



app.use(express.json()); // Middleware para parsear JSON

// Rutas
app.use('/usuarios', usuariosRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
