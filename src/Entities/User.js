// Array to store multiple game information instances
import emptyFoto from "../assets/pfp.png";
import { getGames } from "./Game";

const today = new Date();
const userName = '';
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

function getUserName() {
    return userName; // Retorna el nombre de usuario actual
}

function setUserName(newUserName) {
    userName = newUserName; 
}

// Exporting the functions and variables for use in other files
export { pfp, getUserId, getUserProfile, setPfp, getPfp, getUserName, setUserName };
