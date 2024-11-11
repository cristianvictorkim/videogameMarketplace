import Cookies from "js-cookie";
import { getToken, getUserId, setToken, setUserId, sTokenCookie, sUserIdCookie } from "./User";

const publishers = new Map()

async function getPublisherById(publisherId)
{
    let publisher = {};

    await fetch(`http://localhost:5000/publishers/public/${publisherId}`)
        .then(res => res.json())
        .then(data => publisher = data);

    return publisher;
}

async function register(registerObject) {
    let result = '';
    
    await fetch(`http://localhost:5000/publishers/authentication`, {
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


async function login(email, password) {
    let output = {};

    await fetch(`http://localhost:5000/publishers/authentication/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            email : email,
            password : password
        })
    })
    .then(res => res.json())
    .then(data => {

        output.message = data.message;
        if(data.token && data.publisher)
        {
            output.publisher = data.publisher;
            setToken(data.token);
            setUserId(data.publisher._id);
            Cookies.set(sUserIdCookie, getUserId());
            Cookies.set(sTokenCookie, getToken());
        }
    });   
    
    return output;
}

async function devForgotPassword(userData) {
    
    let output = {};

    await fetch(`http://localhost:5000/publishers/authentication/forgot-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            userData
        })
    })
    .then(res => res.json())
    .then(data => output.message = data.message);
    
    return output;
}

async function getPublisherProfile(publisherId)
{
    let publisher = {};

    await fetch(`http://localhost:5000/publishers/profile/${publisherId}`, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => publisher = data);

    return publisher;
}

export { getPublisherProfile, devForgotPassword, login, getPublisherById, register }