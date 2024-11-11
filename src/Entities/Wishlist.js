import { getToken } from "./User";

async function getWishlistFromUser(userId)
{
    let output = [];

    await fetch(`http://localhost:5000/wishlists/${userId}`, {
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

async function addGameToWishlist(userId, gameId)
{
    await fetch(`http://localhost:5000/wishlists/${userId}/${gameId}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${getToken()}`,
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
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => console.log(response));
}

export { addGameToWishlist, removeGameFromWishlist, getWishlistFromUser }