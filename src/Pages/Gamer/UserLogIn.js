import React, { useState, useContext } from 'react';
import { Link} from 'react-router-dom';

import { setUserId } from 'Entities/User';
import { UserContext } from 'components/Common/UserContext';

const UserLogIn = () => {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");  // Para almacenar el mensaje de error
    const { setProfile } = useContext(UserContext);

    function handleSubmit(e) {
        e.preventDefault();

        if (loginFormData.email === "" || loginFormData.password === "") {
            setErrorMessage("Email and password are required.");
            return;
        }

        fetch('http://localhost:5000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: loginFormData.email,
                currentPassword: loginFormData.password
            }),
        })
        .then(res => res.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem('authToken', data.token);
                setProfile({ username: loginFormData.email });

            } else {
                setErrorMessage("Invalid credentials.");
            }
        })
        .catch(err => {
            console.error(err);
            setErrorMessage("Error logging in.");
        });
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setErrorMessage(""); 
    }

    return (
        <div className="flex items-center justify-center min-h-screen pb-20">
            <form onSubmit={handleSubmit} className="p-8 w-full max-w-sm bg-main-color border-2 border-black">
                <h2 className="text-2xl font-semibold mb-6 text-center">Log in</h2>
                <p className='pb-1'>Email</p>
                <div className="mb-4">
                    <input
                        name="email"
                        onChange={handleChange}
                        type="email"
                        placeholder="Email"
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
                        value={loginFormData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                {errorMessage && <p className="text-red-500 text-center pb-2">{errorMessage}</p>}
                <button
                    type="submit"
                    className="w-full p-2 border rounded-lg border-black bg-btn-color"
                >
                    Log in
                </button>
                <div className='text-center py-4 space-y-1'>
                    <p><Link to='/ForgotPassword'>Forgot Password?</Link></p>
                    <p><Link to="/UserRegistration">Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default UserLogIn;