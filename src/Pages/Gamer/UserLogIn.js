import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { getPfp, getUserId, login, setUserId, userLogged } from 'Entities/User';

import { UserContext } from 'components/Common/UserContext';


const UserLogIn = () => {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const { profile, setProfile, sCLIENT, sDEVELOPER } = useContext(UserContext);

    async function handleSubmit(e)
    {
        e.preventDefault();
        const user = await login(loginFormData.email, loginFormData.password);
        
        if(userLogged())
        {
            setProfile((prev)=> ({
                ...prev,     
                username : user.userName,
                phoneNumber : user.phoneNumber,
                profilePicture : getPfp()
            }))
        }

        window.location.reload(false);
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
  
    if(userLogged())
    {
        return (
            <Navigate to={`/${getUserId()}/`}/>
        )
    }
    else
    {
        return (
            <div className="flex items-center justify-center min-h-screen pb-20">
                <form onSubmit={handleSubmit} className="p-8 w-full max-w-sm bg-main-color border-2 border-black">
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        Log in
                    </h2>
                    <p className='pb-1'>
                        Email
                    </p>
                    <div className="mb-4">
                        <input
                            name="email"
                            onChange={handleChange}
                            type="text"
                            placeholder="Email"
                            value={loginFormData.email}
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>
                    <p className='pb-1'>Password</p>
                    <div className="mb-6">
                        <input
                            name="password"
                            onChange={handleChange}
                            type="password"
                            placeholder="Password"
                            value={loginFormData.password}
                            className="w-full p-2 border rounded-lg"
                            autoComplete="new-password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 border rounded-lg border-black bg-btn-color"
                        >
                        Log in
                    </button>
                    <div className='text-center py-4 space-y-1'> 
                        <p><Link to='/ForgotPassword'>Forgot Password?</Link></p>
                        <p><Link to="/UserRegistration">Register</Link></p>
                        <p><Link to="/CompanyLogIn">
                            <button onClick={() => {setProfile({ username: "", profilePicture: profile.profilePicture, type : sDEVELOPER })}}>
                                I am a developer
                            </button>
                        </Link></p>
                    </div>
                </form>
            </div>
        );
    }
};

export default UserLogIn;
