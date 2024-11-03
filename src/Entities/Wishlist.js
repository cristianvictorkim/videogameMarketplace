async function getWishlistFromUser(userId)
{
    let output = [];

    await fetch(`http://localhost:5000/wishlists/${userId}`)
        .then(res => res.json())
        .then(getWishlistOutput => output = getWishlistOutput);

    return output;
}

async function addGameToWishlist(userId, gameId)
{
    await fetch(`http://localhost:5000/wishlists/${userId}/${gameId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => console.log(response));
}

function removeGameFromWishlist(userId, gameId)
{
    fetch(`http://localhost:5000/wishlists/${userId}/${gameId}` ,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => console.log(response));
}

export { addGameToWishlist, removeGameFromWishlist, getWishlistFromUser }