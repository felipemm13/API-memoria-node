import mongoose from "mongoose";

// Reemplaza la siguiente cadena con tu cadena de conexión real de MongoDB Atlas
const dbURI = 'mongodb+srv://felipe:1234@cluster0.1og0zqj.mongodb.net/WOLKE?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
