async function addComment(gameId, userName, comment, score) 
{
    console.log("llego")
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
    
    await fetch(`http://localhost:5000/games/details/${gameId}`)
        .then(res => res.json())
        .then(data => game = data);

    return game;
}

async function getGamesFiltered(filter) {
    console.log(filter);
    // Get all games
    let gameData = await getGames();
    
    let output = [];
    
    // Filter games
    function filterAttrib(atrib1, atrib2, comparator) {
        console.log("Comparing:", atrib1, "with", atrib2); 
        let insert = true;

        if (atrib1.toString() !== "" && atrib2 !== undefined) {
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
        let priceMatch = true;
        let filterRating = true;
        if (filterPrice !== "") {
            if (filterPrice === "Free") {
                priceMatch = game.price === 0;
            } else if (filterPrice === "Under $10") {
                priceMatch = game.price < 10;
            } else if (filterPrice === "$10-$50") {
                priceMatch = game.price >= 10 && game.price <= 50;
            } else if (filterPrice === "Above $50") {
                priceMatch = game.price > 50;
            }
        }
        
        if (filterRating !== "") {
            if (filterRating === 1) {
                filterRating = game.rating < 1;
            } else if (filterRating === 2) {
                filterRating = game.rating < 2;
            } else if (filterRating === 3) {
                filterRating = game.rating < 3;
            } else if (filterRating === 4) {
                filterRating = game.rating < 4;
            } else if (filterRating === 5) {
                filterRating = game.rating <= 5;
            }
        }

        let insert = 
            (filterAttrib(filterCategory, game.genre, (atrib1, atrib2) => atrib2.toLowerCase().includes(atrib1.toLowerCase()))
            && priceMatch
            && filterAttrib(filterOS, game.OS, (atrib1, atrib2) => atrib2.toLowerCase().includes(atrib1.toLowerCase()))
            && filterAttrib(filterLanguage, game.language, (atrib1, atrib2) => atrib2.toLowerCase().includes(atrib1.toLowerCase()))
            && filterAttrib(filterPlayerCount, game.playerCount, (atrib1, atrib2) => Number(atrib1) <= Number(atrib2))
            && filterRating
            && filterAttrib(filterTitle, game.title, (atrib1, atrib2) => atrib2.toLowerCase().includes(atrib1.toLowerCase())));

        if (insert) output.push(game);
    });

    return output;
}

export { getGameById, getGames, getSelection, getGamesFiltered, addComment };