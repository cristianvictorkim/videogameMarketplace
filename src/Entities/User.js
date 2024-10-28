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

function setPfp(newPfp) {
    pfp = newPfp; // Actualiza la variable global pfp
}

function getPfp() {
    return pfp; // Retorna la foto de perfil actual
}

function getUserName() {
    return userName; // Retorna el nombre de usuario actual
}

function setUserName(newUserName) {
    userName = newUserName; 
}

addGame("Sid Meier’s Civilization® VI", 4.7, 59.99, "Strategy", "Windows10/11");

// Exporting the functions and variables for use in other files
export { addGame, getGames, games, setPfp, getPfp, getUserName, setUserName };
