
const express = require('express');
const connectDB = require('./config/dbConfig');
const cors = require('cors'); // Importar CORS
const gameRoutes = require('./routes/gameRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); // Habilitar CORS

// Rutas
app.use('/api/games', gameRoutes);
app.use('/api/users', userRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

