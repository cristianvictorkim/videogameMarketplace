import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from 'components/Common/UserContext';
import { register } from 'Entities/User'
import Cookies from 'js-cookie';

const UserRegistration = () => {

    const { profile, setProfile, sCLIENT, sDEVELOPER } = useContext(UserContext);
    
    useEffect(() => {
        setProfile((prev) => ({...prev, type : sCLIENT }));
        Cookies.set("type", sCLIENT);
    }, [])

    const [registrationForm, setRegistrationForm] = useState({
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        dateOfBirth: "",
        password: "",
        secretQuestion: "",
        answer: ""
    })

    function handleSubmit(e)
    {
        e.preventDefault();
        let result = register(registrationForm);
        alert(result);
        window.location.reload(false);
    }

    function handleChange(e) {
        const { name, value } = e.target
        setRegistrationForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="">
            <div className="flex items-center justify-center min-h-screen p-10">  
                <form onSubmit={handleSubmit} className="p-5 w-full max-w-sm bg-main-color border-2 border-black">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Registration
                </h2>
                <p className='pb-1'>Username</p>
                <div className="mb-4">
                    <input
                        name="username"
                        onChange={handleChange}
                        type="text"
                        placeholder="Username"
                        value={registrationForm.username}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <p className='pb-1'>Name</p>
                <div className="mb-4">
                    <input
                        name="name"
                        onChange={handleChange}
                        type="text"
                        placeholder="Name"
                        value={registrationForm.name}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <p className='pb-1'>Email Adress</p>
                <div className="mb-6">
                    <input
                        name="email"
                        onChange={handleChange}
                        type="text"
                        placeholder="Email"
                        value={registrationForm.email}
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
                        value={registrationForm.password}
                        className="w-full p-2 border rounded-lg"
                        autoComplete="new-password"
                    />
                </div>
                <p className='pb-1'>Date of birth</p>
                <div className="mb-6">
                    <input
                        name="dateOfBirth"
                        type="date"
                        onChange={handleChange}
                        placeholder="07/04/2024"
                        value={registrationForm.dateOfBirth}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <p className='pb-1'>Secret Question</p>
                <div className="mb-6">
                    <input
                        name="secretQuestion"
                        onChange={handleChange}
                        type="text"
                        placeholder="SecretQuestion"
                        value={registrationForm.secretQuestion}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <p className='pb-1'>Answer</p>
                <div className="mb-6">
                    <input
                        name="answer"
                        onChange={handleChange}
                        type="text"
                        placeholder="Answer"
                        value={registrationForm.answer}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-2 border rounded-lg border-black bg-btn-color"
                >
                    Submit
                </button>
                <div className='text-center py-2 space-y-1'> 
                    <Link to={"/LogIn"}>Log in</Link>
                    <Link to={"/CompanyLogIn"}><p>
                        I am a developer
                    </p></Link>  
                </div>
                </form>
            </div>
        </div>
    );
};

export default UserRegistration;