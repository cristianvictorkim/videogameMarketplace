import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from 'components/Common/UserContext';

const UserRegistration = () => {
    const { setProfile, sDEVELOPER } = useContext(UserContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        dateOfBirth: '',
        secretQuestion: '',
        answer: ''
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    // Cambiar el valor del input 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    //Submit de datos del form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!formData.name || !formData.email || !formData.password || !formData.dateOfBirth || !formData.secretQuestion || !formData.answer) {
            setError('Please fill out all fields');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/authentication', { //Esta es la ruta que estoy poniendo mal (Creo)
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.status === 201) {
                navigate('/login');
            } else {
                setError(data.message || 'Registration failed');
            }
        } catch (err) {
            console.error('Error during registration: ', err);
            setError('Something went wrong, please try again');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="">
            <div className="flex items-center justify-center min-h-screen p-10">
                <form onSubmit={handleSubmit} className="p-5 w-full max-w-sm bg-main-color border-2 border-black">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Registration</h2>

                    {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

                    <p className="pb-1">Name</p>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>

                    <p className="pb-1">Email Address</p>
                    <div className="mb-6">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>

                    <p className="pb-1">Password</p>
                    <div className="mb-6">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            autoComplete="new-password"
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>

                    <p className="pb-1">Date of Birth</p>
                    <div className="mb-6">
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>

                    <p className="pb-1">Secret Question</p>
                    <div className="mb-6">
                        <input
                            type="text"
                            name="secretQuestion"
                            value={formData.secretQuestion}
                            onChange={handleChange}
                            placeholder="Enter secret question"
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>

                    <p className="pb-1">Answer</p>
                    <div className="mb-6">
                        <input
                            type="text"
                            name="answer"
                            value={formData.answer}
                            onChange={handleChange}
                            placeholder="..."
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full p-2 border rounded-lg border-black bg-btn-color"
                    >
                        {loading ? 'Registering...' : 'Submit'}
                    </button>

                    <div className="flex flex-col text-center py-2 space-y-1">
                        <Link to="/login">Log in</Link>
                        <Link to="/CompanyLogIn">
                            <button onClick={() => setProfile({ type: sDEVELOPER })}>
                                I am a developer
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserRegistration;