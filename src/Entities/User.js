// Array to store multiple game information instances
const games = [];

// Counter for auto-assigning gameId
let gameIdCounter = 1;

// Function to add a new game
function addGame(url, title, rating, price) {
    const game = {
        url: url,
        title: title,
        rating: rating,
        price: price,
        gameId: gameIdCounter++  // Assign current counter value and increment
    };
    games.push(game);
}

// Function to get all games
function getGames() {
    return games;
}

// Exporting the functions and games array for use in other files
module.exports = { addGame, getGames, games };