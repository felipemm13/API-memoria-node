// Conexión a MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/miBaseDeDatos', { useNewUrlParser: true, useUnifiedTopology: true });