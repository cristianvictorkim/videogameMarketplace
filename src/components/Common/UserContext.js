import { sProfilePicture, sUsername } from 'Entities/User';
import Cookies from 'js-cookie';
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const sCLIENT = "CLIENT";
const sDEVELOPER = "DEVELOPER";

export const UserProvider = ({ children }) => {

    const type = Cookies.get("type") ? Cookies.get("type") : sCLIENT;
    const [profile, setProfile] = useState({ 
        username : Cookies.get(sUsername),
        profilePicture : Cookies.get(sProfilePicture), 
        type: type
    });

    return (
        <UserContext.Provider value={{ profile, setProfile, sCLIENT, sDEVELOPER }}>
            {children}
        </UserContext.Provider>
    );
};

