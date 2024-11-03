import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { setUserId } from 'Entities/User';

import { UserContext } from 'components/Common/UserContext';


const UserLogIn = () => {
    const [loginFormData, setLoginFormData] = useState({ username: "", password: "" })
    const { profile, setProfile, sCLIENT, sDEVELOPER } = useContext(UserContext);

    function handleSubmit(e)
    {
        e.preventDefault();
        setUserId();
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
  
    return (
        <div className="flex items-center justify-center min-h-screen pb-20">
            <form onSubmit={handleSubmit} className="p-8 w-full max-w-sm bg-main-color border-2 border-black">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Log in
                </h2>
                <p className='pb-1'>
                    Username
                </p>
                <div className="mb-4">
                    <input
                        name="username"
                        onChange={handleChange}
                        type="text"
                        placeholder="Username"
                        value={loginFormData.username}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <p className='pb-1'>Password</p>
                <div className="mb-6">
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <Link to={`/6722c48b5751b6669ba2cb69`}>
                    <button
                        type="submit"
                        className="w-full p-2 border rounded-lg border-black bg-btn-color"
                        >
                        Log in
                    </button>
                </Link>
                <div className='text-center py-4 space-y-1'> 
                    <p><Link>Forgot Password?</Link></p>
                    <p><Link to="/UserRegistration">Register</Link></p>
                    <p><Link to="/CompanyLogin">
                        <button onClick={() => {setProfile({ username: profile.username, profilePicture: profile.profilePicture, type : sDEVELOPER })}}>
                            I am a developer
                        </button>
                    </Link></p>
                </div>
            </form>
        </div>
    );
};

export default UserLogIn;
