import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const sCLIENT = "CLIENT";
const sDEVELOPER = "DEVELOPER";

export const UserProvider = ({ children }) => {
    const [profile, setProfile] = useState({ username : "username", profilePicture : '', type: sCLIENT });

    return (
        <UserContext.Provider value={{ profile, setProfile, sCLIENT, sDEVELOPER }}>
            {children}
        </UserContext.Provider>
    );
};

