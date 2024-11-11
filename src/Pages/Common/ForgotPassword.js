import { UserContext } from 'components/Common/UserContext';
import { devForgotPassword } from 'Entities/Publisher';
import { userForgotPassword } from 'Entities/User';
import React, { useContext, useState } from 'react';

const ForgotPassword = () => {

    const { profile, sCLIENT, sDEVELOPER } = useContext(UserContext);
    
    const [formData, setFormData] = useState({ 
        email: "",
        secretQuestion: "", 
        answer: "",
        newPassword: "",
        repeatNewPassword: ""
    })

    async function handleSubmit(e)
    {
        e.preventDefault();
        if(profile.type === sCLIENT)
        {
            userForgotPassword(formData);
        }
        else if(profile.type === sDEVELOPER)
        {
            devForgotPassword(formData);
        }
        //window.location.reload(false);
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div className="">
            <div className="flex items-center justify-center min-h-screen pb-20">
            <form onSubmit={handleSubmit} className="p-8 w-full max-w-sm bg-main-color border-2 border-black">
                <h2 className="text-2xl font-semibold mb-6 text-center">Forgot password?</h2>
                <p className='pb-1'>Enter email address</p>
                <div className="mb-4">
                <input
                    name="email"
                    onChange={handleChange}
                    type="text"
                    placeholder="Email"
                    value={formData.email}
                    className="w-full p-2 border rounded-lg"
                />
                </div>
                <p className='pb-1'>Enter secret question</p>
                <div className="mb-6">
                <input
                    name="secretQuestion"
                    onChange={handleChange}
                    type="text"
                    placeholder="Secret Question"
                    value={formData.secretQuestion}
                    className="w-full p-2 border rounded-lg"
                />
                </div>
                <p className=''>Answer</p>
                <div className="mb-6">
                <input
                    name="answer"
                    onChange={handleChange}
                    type="text"
                    placeholder="Answer"
                    value={formData.answer}
                    className="w-full p-2 border rounded-lg"
                />
                </div>
                <p className=''>New Password</p>
                <div className="mb-6">
                <input
                    name="newPassword"
                    onChange={handleChange}
                    type="password"
                    placeholder="New Password"
                    value={formData.newPassword}
                    className="w-full p-2 border rounded-lg"
                />
                </div>
                <p className=''>Repeat New Password</p>
                <div className="mb-6">
                <input
                    name="repeatNewPassword"
                    onChange={handleChange}
                    type="password"
                    placeholder="Repeat New Password"
                    value={formData.repeatNewPassword}
                    className="w-full p-2 border rounded-lg"
                />
                </div>
                <button
                    type="submit"
                    className="w-full p-2 border rounded-lg border-black bg-btn-color"
                    >
                    Change Password
                </button>
            </form>
            </div>
        </div>
    );
};

export default ForgotPassword;