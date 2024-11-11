// Array to store multiple game information instances
import emptyFoto from "assets/User/pfp.png";
import Cookies from 'js-cookie';

const sUserIdCookie = 'userid';
const sTokenCookie = 'token';

let pfp = emptyFoto;
let userId = Cookies.get(sUserIdCookie);
let token = Cookies.get(sTokenCookie);

// Server requests ------------------------------------------------------------------------------------------
async function getUserProfile() {
    let user = {};

    await fetch(`http://localhost:5000/users/profile/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => user = data);

    return user;
}

async function logOff()
{
    Cookies.remove(sUserIdCookie);
    Cookies.remove(sTokenCookie);
    userId = undefined;
    token = undefined;
}

async function login(email, password)
{   
    let user = {};

    await fetch(`http://localhost:5000/users/authentication/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {
        if(data.token && data.user)
        {
            user = data.user;
            token = data.token;
            userId = data.user._id;
            Cookies.set(sUserIdCookie, userId);
            Cookies.set(sTokenCookie, token);
        }
    });

    return user;
}

async function register(registerObject)
{  
    let result = '';
    await fetch(`http://localhost:5000/users/authentication`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            registerObject: registerObject
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        result = data.message;
    });   

    return result;
}

async function addPurchase(games) {
    await fetch(`http://localhost:5000/users/${userId}/purchases`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            games : games
        })
    })
}

async function userForgotPassword(userData) {
    await fetch(`http://localhost:5000/users/authentication/forgot-password`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            userData
        })
    })
}


// Local Accessors ------------------------------------------------------------------------------------------

function setPfp(newPfp) {
    pfp = newPfp; // Actualiza la variable global pfp
}

function getPfp() {
    return pfp; // Retorna la foto de perfil actual
}

function userLogged()
{
    console.log(userId, token)
    return userId !== undefined && token !== undefined;
}

function getUserId()
{
    return userId;
}

function setUserId(id)
{
    userId = id;
}

function getToken()
{
    return token;
}

function setToken(newToken)
{
    token = newToken;
}

// Exporting the functions and variables for use in other files
export { 
    userForgotPassword,
    setUserId,
    setToken,
    sTokenCookie,
    sUserIdCookie,
    addPurchase, 
    getToken, 
    register, 
    pfp, 
    getUserId, 
    getUserProfile, 
    setPfp, 
    getPfp, 
    userLogged, 
    logOff, 
    login 
};
