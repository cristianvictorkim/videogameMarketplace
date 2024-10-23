// Array to store multiple game information instances
const games =  new Map();
const today = new Date();
const userName = '';

// Counter for auto-assigning gameId
let gameIdCounter = 1;

// Function to add a new game
function addGame(title, rating, price, genre, os) {
    const game = {
        title: title,
        rating: rating,
        price: price,
        gameId: gameIdCounter,  // Assign current counter value and increment
        purchaseDate: today.getDate(),
        genre: genre,
        os: os
    };
    games.set(gameIdCounter, game);
    gameIdCounter++;
}

// Function to get all games
function getGames() {
    return Array.from(games.values());
}

addGame("Sid Meier’s Civilization® VI", 4.7, 59.99, "Strategy", "Windows10/11");

// Exporting the functions and games array for use in other files
module.exports = { addGame, getGames, games };