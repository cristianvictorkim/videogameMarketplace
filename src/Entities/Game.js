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
        n : 4
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

async function getGamesFiltered(filter)
{
    console.log(filter)
    // Get all games
    let gameData = await getGames();
    
    let output = [];
    
    // Filter games
    function filterAttrib(atrib1, atrib2, comparator)
    {
        let insert = true;

        if(atrib1.toString() !== "")
        {
            insert = comparator(atrib1, atrib2);
        }
        
        return insert;
    }

    let filterCategory = filter.category;
    let filterPrice = filter.price;
    let filterOS = filter.os;
    let filterLanguage = filter.language;
    let filterPlayerCount = filter.playerCount;
    let filterRating = filter.rating;
    let filterTitle = filter.title;

    await gameData.forEach((game) => {
        
        let insert = true;

        insert = filterAttrib(filterCategory,    game.genre,        (atrib1, atrib2) => { console.log(typeof atrib1, typeof atrib2); return atrib2.toLowerCase().includes(atrib1.toLowerCase()) } );
        insert = filterAttrib(filterPrice,       game.price,        (atrib1, atrib2) => { console.log(typeof parseInt(atrib1), typeof parseInt(atrib2)); return parseInt(atrib1) >= parseInt(atrib2) } );
        insert = filterAttrib(filterOS,          game.OS,           (atrib1, atrib2) => { console.log(typeof atrib1, typeof atrib2); return atrib2.toLowerCase().includes(atrib1.toLowerCase()) } );
        insert = filterAttrib(filterLanguage,    game.language,     (atrib1, atrib2) => { console.log(typeof atrib1, typeof atrib2); return atrib2.toLowerCase().includes(atrib1.toLowerCase())  } );
        insert = filterAttrib(filterPlayerCount, game.playerCount,  (atrib1, atrib2) => { console.log(typeof parseInt(atrib1), typeof parseInt(atrib2)); return parseInt(atrib1) <= parseInt(atrib2) } );
        insert = filterAttrib(filterRating,      game.score,        (atrib1, atrib2) => { console.log(typeof parseInt(atrib1), typeof parseInt(atrib2)); return parseInt(atrib1) <= parseInt(atrib2) } );
        insert = filterAttrib(filterTitle,       game.title,        (atrib1, atrib2) => { console.log(typeof atrib1, typeof atrib2); return atrib2.toLowerCase().includes(atrib1.toLowerCase()) } );

        if (insert) output.push(game);

    })

    return output;
}

// Exporting the functions and games array for use in other files
export { getGameById, getGames, getSelection, getGamesFiltered };