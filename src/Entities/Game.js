import { getUserId } from "./User";

async function addComment(gameId, userName, comment, score) 
{
    await fetch(`http://localhost:5000/games/${gameId}/comments`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            user: userName,
            comment: comment,
            rating: score,
            date: Date.now()
        })
    })
    .then(response => console.log(response));
}

// Function to get all games
async function getGames() {
    
    let output = [];

    await fetch("http://localhost:5000/games/public")
    .then(res => res.json())
    .then(data => output = data);

    return output;
}

async function getSelection() {
    
    let output = [];

    await fetch("http://localhost:5000/games/public/selection?" + new URLSearchParams({
        n : 4
        }).toString())
    .then(res => res.json())
    .then(data => output = data);

    return output;
}

async function createUserInteraction(gameId, userId)
{
    let game = {};
    console.log("creating user interaction")
    await fetch(`http://localhost:5000/games/public/details/${gameId}/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    }).then(res => res.json())
    .then(data => game = data);

    return game;
}

async function getGameById(gameId)
{
    let game = {};
    await fetch(`http://localhost:5000/games/public/details/${gameId}`)
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

        if(atrib1.toString() !== "" && atrib2 !== undefined)
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
        
        
        let insert = 
            (filterAttrib(filterCategory,      game.genre,        (atrib1, atrib2) => { return atrib2.toLowerCase().includes(atrib1.toLowerCase()) } )
            && filterAttrib(filterPrice,       game.price,        (atrib1, atrib2) => { return (Number(atrib1) > Number(atrib2)) } )
            && filterAttrib(filterOS,          game.OS,           (atrib1, atrib2) => { return atrib2.toLowerCase().includes(atrib1.toLowerCase()) } )
            && filterAttrib(filterLanguage,    game.language,     (atrib1, atrib2) => { return atrib2.toLowerCase().includes(atrib1.toLowerCase())  } )
            && filterAttrib(filterPlayerCount, game.playerCount,  (atrib1, atrib2) => { return (Number(atrib1) < Number(atrib2)) } )
            && filterAttrib(filterRating,      game.score,        (atrib1, atrib2) => { return (Number(atrib1) < Number(atrib2)) } )
            && filterAttrib(filterTitle,       game.title,        (atrib1, atrib2) => { return atrib2.toLowerCase().includes(atrib1.toLowerCase()) } ))

        if (insert) output.push(game);

    })

    return output;
}

export { createUserInteraction, getGameById, getGames, getSelection, getGamesFiltered, addComment };