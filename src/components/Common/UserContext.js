import { sProfilePicture, sUsername } from 'Entities/User';
import Cookies from 'js-cookie';
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const sCLIENT = "CLIENT";
const sDEVELOPER = "DEVELOPER";

export const UserProvider = ({ children }) => {

    const type = Cookies.get("type") ? Cookies.get("type") : sCLIENT;
    
    let username = Cookies.get(sUsername) ? Cookies.get(sUsername) : "username";
    let profilePicture = Cookies.get(sProfilePicture) ? Cookies.get(sProfilePicture) : "https://firebasestorage.googleapis.com/v0/b/jovial-beach-442521-q5.firebasestorage.app/o/files%2Fpfp.png?alt=media&token=3332a2a8-5490-40ce-b5d9-4ac5f2876156"
    
    const [profile, setProfile] = useState({ 
        username : username,
        profilePicture : profilePicture, 
        type: type
    });

    return (
        <UserContext.Provider value={{ profile, setProfile, sCLIENT, sDEVELOPER }}>
            {children}
        </UserContext.Provider>
    );
};

