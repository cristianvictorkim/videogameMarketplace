async function getCartForUser(userId)
{
    let output = [];

    await fetch(`http://localhost:5000/carts/${userId}`)
        .then(res => res.json())
        .then(getCartOutput => output = getCartOutput);
    return output;
}

async function addGameToCart(userId, gameId)
{
    await fetch(`http://localhost:5000/carts/${userId}/${gameId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => console.log(response));
}

function removeGameFromCart(userId, gameId)
{
    fetch(`http://localhost:5000/carts/${userId}/${gameId}` ,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => console.log(response));
}

export { getCartForUser, addGameToCart, removeGameFromCart };