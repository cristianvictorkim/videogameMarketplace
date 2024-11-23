// Array to store multiple game information instances
import Cookies from 'js-cookie';

const sUserIdCookie = 'userid';
const sTokenCookie = 'token';
const sUsername = 'username';
const sProfilePicture = 'profilepicture';

let userId = Cookies.get(sUserIdCookie);
let token = Cookies.get(sTokenCookie);
let username = Cookies.get(sUsername);
let profilePicture = Cookies.get(sProfilePicture);

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
    userId = undefined;
    
    Cookies.remove(sTokenCookie);
    token = undefined;

    Cookies.set(sUsername, "username");
    Cookies.set(sProfilePicture, "https://firebasestorage.googleapis.com/v0/b/jovial-beach-442521-q5.firebasestorage.app/o/files%2Fpfp.png?alt=media&token=3332a2a8-5490-40ce-b5d9-4ac5f2876156");
}

async function login(email, password)
{   
    let output = {};

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
        output.message = data.message;
        if(data.token && data.user)
        {
            output.user = data.user;

            token = data.token;
            userId = data.user._id;
            profilePicture = data.user.profilePicture;
            username = data.user.username;

            Cookies.set(sUserIdCookie, userId);
            Cookies.set(sTokenCookie, token);
            Cookies.set(sProfilePicture, profilePicture);
            Cookies.set(sUsername, username);
        }
    });

    return output;
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
    }).then(res => res.json()).then(data => console.log(data))
}

async function userForgotPassword(userData) {
    
    let output = {};

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
    .then(res => res.json())
    .then(data => output.message = data.message)

    return output
}

async function updateProfile(profileChanges) {
    
    let output = {};
    console.log(profileChanges)

    await fetch(`http://localhost:5000/users/profile/${userId}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            profileChanges
        })
    })
    .then(res => res.json())
    .then(data => output.message = data.message);
    
    return output;
}

async function confirmPurchase(userId, games) {
    try {
        addPurchase(games);
    } catch (error) {
        console.error("Error in clearCart:", error);
    }
}

// Local Accessors ------------------------------------------------------------------------------------------

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
    confirmPurchase,
    updateProfile,
    userForgotPassword,
    setUserId,
    setToken,
    sTokenCookie,
    sUserIdCookie,
    sProfilePicture,
    sUsername,
    addPurchase, 
    getToken, 
    register, 
    getUserId, 
    getUserProfile, 
    userLogged, 
    logOff, 
    login 
};
