import Cookies from 'js-cookie';
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const sCLIENT = "CLIENT";
const sDEVELOPER = "DEVELOPER";

export const UserProvider = ({ children }) => {

    const type = Cookies.get("type") ? Cookies.get("type") : sCLIENT;
    const [profile, setProfile] = useState({ 
        username : "username",
        name: "name",
        address: "address",
        dateOfBirth: "", 
        profilePicture : "assets/User/pfp.png", 
        type: type
    });

    return (
        <UserContext.Provider value={{ profile, setProfile, sCLIENT, sDEVELOPER }}>
            {children}
        </UserContext.Provider>
    );
};

