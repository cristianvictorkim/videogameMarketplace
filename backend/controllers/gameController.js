// controllers/gameController.js
const Game = require('../models/game.js');

// Obtener todos los juegos
exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Crear un nuevo juego
exports.createGame = async (req, res) => {
  const { title, description, price, genre, releaseDate, image } = req.body;
  const newGame = new Game({ title, description, price, genre, releaseDate, image });

  try {
    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ message: 'Error creating game' });
  }
};
