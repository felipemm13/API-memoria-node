import dotenv from 'dotenv';
dotenv.config();

const authenticate = (req, res, next) => {
  // Extraer directamente el token de la cabecera 'Authorization'
  const token = req.header('Authorization'); // Tomar directamente el valor del header

  // Comparar el token extraído con el valor de 'process.env.TOKEN'
  if (!token || token !== process.env.TOKEN) {
    return res.status(401).json({ message: 'Acceso no autorizado' });
  }

  // Si el token es válido, permite que la solicitud continúe
  next();
};

export default authenticate;