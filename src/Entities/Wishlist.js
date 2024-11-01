async function getWishlistFromUser(userId)
{
    let output = [];

    await fetch("http://localhost:5000/wishlists/byUserId?" + new URLSearchParams({
            userId: userId
            }).toString())
        .then(res => res.json())
        .then(getWishlistOutput => output = getWishlistOutput);

    return output;
}

async function addGameToWishlist(userId, gameId)
{
    await fetch('http://localhost:5000/wishlists/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            userId : userId,
            gameId : gameId
        })
    })
    .then(response => console.log(response));
}

function removeGameFromWishlist(userId, gameId)
{
    fetch("http://localhost:5000/wishlists/remove?" + new URLSearchParams({
        userId: userId,
        gameId: gameId
        }).toString() ,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => console.log(response));
}

export { addGameToWishlist, removeGameFromWishlist, getWishlistFromUser }