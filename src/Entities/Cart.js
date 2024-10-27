async function getCartForUser(userId)
{
    let output = [];

    await fetch("http://localhost:3001/carts?" + new URLSearchParams({
            userId: userId
            }).toString())
        .then(res => res.json())
        .then(getCartOutput => output = getCartOutput);

    return output;
}

function addGameToCart(userId, gameId)
{
    fetch("http://localhost:3001/cart/add?" + new URLSearchParams({
        userId : userId,
        gameId : gameId
        }).toString())
}

function removeGameFromCart(removeUrl)
{
    fetch("http://localhost:3001" + removeUrl);
}

export { getCartForUser, addGameToCart, removeGameFromCart };