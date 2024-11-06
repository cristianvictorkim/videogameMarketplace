async function getCartForUser(userId)
{
    let output = [];

    await fetch(`http://localhost:5000/carts/${userId}`)
        .then(async res => {
            if (res.ok)
            {
                output = await res.json();
            }
            else
            {
                output = {userId: userId, games: []}
            }
        })
        
    return output;
}
// No funciona
async function clearCart(userId) {
    try {
        const response = await fetch(`http://localhost:5000/carts/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            console.error("Error clearing cart:", response.statusText);
        }
    } catch (error) {
        console.error("Error in clearCart:", error);
    }
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

export { getCartForUser, addGameToCart, removeGameFromCart, clearCart };