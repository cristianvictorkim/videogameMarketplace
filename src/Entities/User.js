// Array to store multiple game information instances
import { redirect } from "react-router-dom";
import emptyFoto from "../assets/pfp.png";

let pfp = emptyFoto;
let userId = undefined;
let debugRequireAuth = false;
debugRequireAuth = true; // <----- comment this to bypass auth

if (!debugRequireAuth)
{
    userId = "6722c48b5751b6669ba2cb69"
}

// Server requests ------------------------------------------------------------------------------------------
async function getUserProfile() {
    let user = {};

    await fetch("http://localhost:5000/users/profile/byId?" + new URLSearchParams({
            userId : userId
            }).toString())
        .then(res => res.json())
        .then(data => user = data);

    return user;
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

async function logOff()
{
    if(debugRequireAuth)
    {
        userId = undefined;
    }
}

// Local Accessors ------------------------------------------------------------------------------------------

function setPfp(newPfp) {
    pfp = newPfp; // Actualiza la variable global pfp
}

function getPfp() {
    return pfp; // Retorna la foto de perfil actual
}

function setUserId()
{
    userId = "6722c48b5751b6669ba2cb69"
    console.log(userId)
}

function userLogged()
{
    return userId !== undefined;
}

function getUserId()
{
    return userId;
}

// Exporting the functions and variables for use in other files
export { pfp, setUserId, getUserId, getUserProfile, setPfp, getPfp, getUserByUsername, userLogged, logOff };
