import React from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { userLogged } from 'Entities/User';

const AuthRequired = () => {
    
    const params = useParams();

    if (userLogged())
    {
        return <Outlet/>
    }
    else
    {
        alert("You must log in first")
        return (
            <div className='min-h-screen'>
                <Navigate to="/Login" />
            </div>
        )
    }
};

export default AuthRequired;