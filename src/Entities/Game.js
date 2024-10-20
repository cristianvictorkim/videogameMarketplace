// Array to store multiple game information instances
const games = new Map();
let gameIdCounter = 0;

// Function to add a new game
function addGame(bannerUrl, gameplayUrl, title, genre, rating, price) {
    const game = {
        bannerUrl: bannerUrl,
        gameplayUrl: gameplayUrl,
        title: title,
        genre: genre,
        rating: rating,
        price: price,
        gameId: gameIdCounter  // Assign current counter value and increment
    };
    games.set(gameIdCounter, game);
    gameIdCounter++;
}

// Function to get all games
function getGames() {
    return Array.from(games.values());
}

// Function to get all games
function getGameById(gameId) {
    let game = games.get(gameId)
    console.log(gameId, game);
    return game;
}

// Adding games with stubbed data
const bannerUrl_2k25 = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2878980/header.jpg?t=1729266229";
const bannerUrl_FC25 = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg?t=1728642725";
const bannerUrl_CIV6 = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/289070/header.jpg?t=1728608297";
const bannerUrl_ACM = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3035570/header.jpg?t=1729184423";
const gameplayUrl_2k25 = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2878980/ss_8e3db832678488ed1003fa41cc0ef9bd74d332e5.1920x1080.jpg?t=1729266229";
const gameplayUrl_FC25 = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2669320/ss_709f8a775654b083b7faf991522f657dda2a14a9.1920x1080.jpg?t=1728642725";
const gameplayUrl_CIV6 = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/289070/ss_7f598198526afc260d939a98af4d76d95f5349e4.1920x1080.jpg?t=1728608297";
const gameplayUrl_ACM = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3035570/ss_d2458dc72f538b42218cc16c0ce054810511bd81.1920x1080.jpg?t=1729184423";


addGame(bannerUrl_2k25, gameplayUrl_2k25 , "2k25", "Simulation", 2.5, 59.99);
addGame(bannerUrl_FC25, gameplayUrl_FC25 , "EAFC25", "Simulation", 4.2, 69.99);
addGame(bannerUrl_CIV6, gameplayUrl_CIV6, "Sid Meier’s Civilization® VI", "Strategy", 4.7, 59.99);
addGame(bannerUrl_ACM, gameplayUrl_ACM, "Assassin's Creed Mirage", "Open World", 4.0, 39.99);

// Exporting the functions and games array for use in other files
module.exports = { addGame, getGames, getGameById, games };