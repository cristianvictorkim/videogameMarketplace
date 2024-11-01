// Function to get all games
async function getGames() {
    
    let output = [];

    await fetch("http://localhost:5000/games")
    .then(res => res.json())
    .then(data => output = data);

    return output;
}

async function getSelection() {
    
    let output = [];

    await fetch("http://localhost:5000/games/selection?" + new URLSearchParams({
        n : 20
        }).toString())
    .then(res => res.json())
    .then(data => output = data);

    return output;
}

async function getGameById(gameId)
{
    let game = {};
    
    await fetch("http://localhost:5000/games/byId?" + new URLSearchParams({
            gameId : gameId
            }).toString())
        .then(res => res.json())
        .then(data => game = data);

    return game;
}

// Exporting the functions and games array for use in other files
export { getGameById, getGames, getSelection };