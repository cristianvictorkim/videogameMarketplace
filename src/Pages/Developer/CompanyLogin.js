import React, { useState, useContext, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { UserContext } from 'components/Common/UserContext';

import { getPfp, getUserId, userLogged } from 'Entities/User';
import { login } from 'Entities/Publisher';
import Cookies from 'js-cookie';


const CompanyLogIn = () => {

    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
    const { profile, setProfile, sCLIENT, sDEVELOPER } = useContext(UserContext);
    
    useEffect(() => {
        setProfile((prev) => ({...prev, type : sDEVELOPER }));
        Cookies.set("type", sDEVELOPER);
    }, [])   

    async function handleSubmit(e)
    {
        e.preventDefault();
        const output = await login(loginFormData.email, loginFormData.password);
        console.log('OUTPUT completo: ', output);

        const token = output.token;
        const publisher = output.publisher;


        if (token) {
            // Guardamos el token en Cookies con una expiración de 7 días
            Cookies.set('token', token, { expires: 7 });  
            console.log("Token JWT:", token);
        }

        if (publisher) {
            Cookies.set('publisherId', publisher._id, { expires: 7 });
            Cookies.set('publisherTitle', publisher.title, { expires: 7 });
        }

        if(userLogged())
        {
            setProfile((prev)=> ({
                ...prev,     
                username : output.publisher.name
            }))
        }

        alert(output.message);
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
                        <p><Link to='/CompanyRegistration'>Register</Link></p>
                        <p><Link to="/Login">                        
                            I am a gamer
                        </Link></p>
                    </div>
                </form>
            </div>
        );
    }
};

export default CompanyLogIn;

