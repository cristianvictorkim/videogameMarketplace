import React, { useState } from 'react';
import { Link, Navigate, redirect } from 'react-router-dom';
import { setUserId, userLogged } from '../Entities/User';


const UserLogIn = () => {
    const [loginFormData, setLoginFormData] = useState({ username: "", password: "" })
  
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
                        value={loginFormData.email}
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
                <button
                    type="submit"
                    className="w-full p-2 border rounded-lg border-black bg-btn-color"
                    >
                    Log in
                </button>
                <div className='text-center py-4 space-y-1'> 
                    <p><Link>Forgot Password?</Link></p>
                    <p><Link to="/UserRegistration">Register</Link></p>
                    <p><Link to="/CompanyLogin">I am a developer</Link></p>
                </div>
            </form>
        </div>
    );
};

export default UserLogIn;
