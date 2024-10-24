let useLocalData = true;

// Array to store multiple game information instances
let activeGame = -1;
const games = new Map();

// Function to get all games
function getGames() {
    return Array.from(games.values());
}

function getActiveGame()
{
    return activeGame;
}

function setActiveGame(gameId)
{
    console.log(gameId);
    activeGame = gameId;
}

function getGameCards(gamesIds)
{
    gamesIds.forEach(id => {
        
        let output = [];
        
        if (games[id])
        {
            output.push(games[id]);
        }
        else
        {
            fetch("http://localhost:3001/get-game-by-id?"  + new URLSearchParams({
                gameId: id
            }).toString())
            .then(data => output.push(data))
        }
    });
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

// Exporting the functions and games array for use in other files
module.exports = { getGames, games, getActiveGame, setActiveGame, useLocalData, getGameCards };