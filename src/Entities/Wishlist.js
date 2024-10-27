async function getWishlistFromUser(userId)
{
    let output = [];

    await fetch("http://localhost:3001/wishlist?" + new URLSearchParams({
            userId: userId
            }).toString())
        .then(res => res.json())
        .then(getWishlistOutput => output = getWishlistOutput);

    return output;
}

function addGameToWishlist(userId, gameId)
{
    fetch("http://localhost:3001/wishlist/add?" + new URLSearchParams({
        userId : userId,
        gameId : gameId
        }).toString())
}

function removeGameFromWishlist(removeUrl)
{
    fetch("http://localhost:3001" + removeUrl);
}

export { addGameToWishlist, removeGameFromWishlist, getWishlistFromUser }