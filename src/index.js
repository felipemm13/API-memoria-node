import express from 'express';
import './storage/connect.js';
import deviceRouter from './routes/deviceRoutes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Middleware para analizar solicitudes JSON
app.use(express.urlencoded({ extended: true })); // Middleware para analizar datos en formato URL-encoded

// Rutas
app.use(deviceRouter)

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
