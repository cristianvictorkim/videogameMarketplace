// models/Game.js
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  genre: { type: String },
  releaseDate: { type: Date },
  image: { type: String },
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
