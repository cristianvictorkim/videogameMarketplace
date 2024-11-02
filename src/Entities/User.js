// Array to store multiple game information instances
import { redirect } from "react-router-dom";
import emptyFoto from "../assets/pfp.png";

let pfp = emptyFoto;
let userId = "6722c48b5751b6669ba2cb69";

function getUserId()
{
    return userId;
}

async function getUserProfile() {
    let user = {};

    await fetch("http://localhost:5000/users/profile/byId?" + new URLSearchParams({
            userId : userId
            }).toString())
        .then(res => res.json())
        .then(data => user = data);

    return user;
}

function setPfp(newPfp) {
    pfp = newPfp; // Actualiza la variable global pfp
}

function getPfp() {
    return pfp; // Retorna la foto de perfil actual
}

async function getUserByUsername(username)
{
    let user = {};

    await fetch("http://localhost:5000/users/byUsername?" + new URLSearchParams({
            username : username
            }).toString())
        .then(res => res.json())
        .then(data => user = data);

    return user;
}

function authUser(rederictRoute)
{
    if (userId === "-1")
    {
        throw redirect(rederictRoute)
    }
    return null;
}

// Exporting the functions and variables for use in other files
export { pfp, getUserId, getUserProfile, setPfp, getPfp, getUserByUsername, authUser };
