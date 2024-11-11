import { register } from 'Entities/Publisher';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DeveloperRegistration = () => {

    const [registrationForm, setRegistrationForm] = useState({
        name: "",
        email: "",
        description: "",
        password: "",
        secretQuestion: "",
        answer: ""
    })

    async function handleSubmit(e)
    {
        e.preventDefault();
        let result = await register(registrationForm);
        alert(result);
        //window.location.reload(false);
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
        <div className="flex items-center justify-center min-h-screen">  
        <form className="p-5 w-full max-w-sm" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-6 text-center">
                Registration form
            </h2>
            <p className='pb-1'>Company Name</p>
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
            />
            </div>
            <p className='pb-1'>Company Logo</p>
            <div className="mb-6">
                <input
                type="file"
                placeholder="Logo"
                className="w-full p-2 border rounded-lg"
                />
            </div>
            <p className='pb-1'>Description</p>
            <div className="mb-6">
                <input
                    name="description"
                    onChange={handleChange}
                    type="text"
                    placeholder="Description"
                    value={registrationForm.description}
                    className="w-full p-2 border rounded-lg"
                />
            </div>
            <p className='pb-1'>Secret Question</p>
            <div className="mb-6">
                <input
                    name="secretQuestion"
                    onChange={handleChange}
                    type="text"
                    placeholder="Secret Question"
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
            <div className='flex space-x-3'>
            <button
                type="submit"
                className="p-2 border rounded-lg border-black bg-btn-color"
            >
                Register
            </button>
            <Link to='/CompanyLogIn'>
                <button
                type="submit"
                className="p-2 border rounded-lg border-black bg-btn-color"
                >
                Back to Log In
                </button>
            </Link>  
            </div>
            
        </form>
        </div>
    </div>
    );
};

export default DeveloperRegistration;