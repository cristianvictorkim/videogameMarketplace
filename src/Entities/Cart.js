import { addPurchase, getToken } from "./User";

async function getCartForUser(userId)
{
    let output = [];

    await fetch(`http://localhost:5000/carts/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
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
async function confirmPurchase(userId, games) {

    try {
        const response = await fetch(`http://localhost:5000/carts/${userId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            console.error("Error clearing cart:", response.statusText);
        }
        addPurchase(games);
    } catch (error) {
        console.error("Error in clearCart:", error);
    }

}

async function addGameToCart(userId, gameId)
{
    await fetch(`http://localhost:5000/carts/${userId}/${gameId}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${getToken()}`,
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
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => console.log(response));
}

export { getCartForUser, addGameToCart, removeGameFromCart, confirmPurchase };