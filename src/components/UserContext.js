import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState('Username');
    const [profilePicture, setUserProfilePicture] = useState('');

    return (
        <UserContext.Provider value={{ username, setUsername, profilePicture, setUserProfilePicture }}>
            {children}
        </UserContext.Provider>
    );
};