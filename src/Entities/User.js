let userId = -1;

function getUserId()
{
    return userId;
}

// Array to store multiple game information instances
const games = new Map();
import emptyFoto from "../assets/pfp.png";

const games = new Map();
const today = new Date();
const userName = '';
let pfp = emptyFoto;

// Counter for auto-assigning gameId
let gameIdCounter = 1;

// Function to add a new game
function addGame(title, rating, price, genre, os) {
    const game = {
        title: title,
        rating: rating,
        price: price,
        gameId: gameIdCounter,
        purchaseDate: today.toLocaleDateString(),
        genre: genre,
        os: os
    };
    games.set(gameIdCounter, game);
    gameIdCounter++;
}

function getGames() {
    return Array.from(games.values());
}

addGame("Sid Meier’s Civilization® VI", 4.7, 59.99, "Strategy", "Windows10/11");

// Exporting the functions and variables for use in other files
export { addGame, getGames, games, setPfp, getPfp, getUserName, setUserName };
