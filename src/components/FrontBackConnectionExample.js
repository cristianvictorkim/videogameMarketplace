// src/components/GameList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Hacer una solicitud GET a la API del backend
    axios.get('http://localhost:5000/api/games')
      .then(response => {
        setGames(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the games!', error);
      });
  }, []);

  return (
    <div>
      <h1>Game List</h1>
      <ul>
        {games.map(game => (
          <li key={game._id}>
            {game.title} - ${game.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
