async function getCartForUser(userId)
{
    let output = [];

    await fetch("http://localhost:5000/carts/byUserId?" + new URLSearchParams({
            userId: userId
            }).toString())
        .then(res => res.json())
        .then(getCartOutput => output = getCartOutput);
    console.log(output)
    return output;
}

async function addGameToCart(userId, gameId)
{
    await fetch('http://localhost:5000/carts/add', {
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

function removeGameFromCart(userId, gameId)
{
    fetch("http://localhost:5000/carts/remove?" + new URLSearchParams({
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

export { getCartForUser, addGameToCart, removeGameFromCart };