import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import placeholder from 'assets/Misc/placeholder-image.jpg';
import { getToken, getUserId } from 'Entities/User';

const EditGame = () => {
    const location = useLocation();
    const { publisherId, gameId } = useParams();
    const history = useNavigate();
    const { game } = location.state || {};

    const [gameData, setGameData] = useState(() => ({
        name: game?.title || '',
        price: game?.price || '',
        genre: game?.genre || '',
        mainPhoto: game?.bannerUrl || '',
        miniature: game?.miniature || '',
        description: game?.description || '',
        minRequirements: game?.systemRequirements?.min || {
            os: '',
            processor: '',
            memory: '',
            storage: '',
            gpu: ''
        },
        recRequirements: game?.systemRequirements?.rec || {
            os: '',
            processor: '',
            memory: '',
            storage: '',
            gpu: ''
        }
    }));

    useEffect(() => {
        if (!game && publisherId) {
            fetch(`http://localhost:5000/publishers/profile/${publisherId}`)
                .then(response => response.json())
                .then(data => {
                    setGameData(prevData => ({
                        ...prevData,
                        ...data
                    }));
                });
        }
    }, [publisherId, game]);

    const handleInputChange = (field, value) => {
        setGameData(prevData => ({
            ...prevData,
            [field]: value
        }));
    };

    const handleNestedInputChange = (section, field, value) => {
        setGameData(prevData => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: value
            }
        }));
    };

    const handleImageChange = (field, file) => {
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            handleInputChange(field, imageUrl);
        } else {
            handleInputChange(field, ''); 
        }
    };

    const saveChanges = async () => {
        const token = getToken();
        if (!token) {
            alert('You must be logged in to make changes');
            return;
        }

        const updatedGameData = {
            title: gameData.name,
            price: gameData.price,
            genre: gameData.genre,
            description: gameData.description,
            systemRequirements: {
                minimum: gameData.minRequirements,
                recommended: gameData.recRequirements
            },
            OS: gameData.minRequirements.os,
            bannerUrl: gameData.mainPhoto || '',  
            gameplayUrl: gameData.miniature || '',  
            publisherId,
            publisher: gameData.publisher,
            language: 'English',
            playerCount: 1,  
            isHidden: false
        };

        try {
            const response = await fetch(`http://localhost:5000/games/${gameId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedGameData)
            });

            if (response.ok) {
                const result = await response.json();
                alert('Game updated successfully!');
                history.push(`/games/${gameId}`);
            } else {
                alert('Error updating game');
            }
        } catch (error) {
            console.error('Error updating game:', error);
            alert('Error updating game');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className='p-5'>
                <h1 className='titleBold'>Edit Game: {gameData.name || 'Game'}</h1>
            </div>
            <div className='flex justify-center'>
                <div className="flex w-[60rem] space-x-10">
                    <div className="flex-1 flex flex-col items-center">
                        <p>Main photo</p>
                        <img src={gameData.mainPhoto || placeholder} className="mainPhoto" alt="Main" />
                        <input
                            type="file"
                            className="w-[50%] mx-auto pt-3"
                            onChange={e => handleImageChange('mainPhoto', e.target.files[0])}
                        />
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <p>Miniature</p>
                        <img src={gameData.miniature || placeholder} className="miniature w-full object-cover h-48" alt="Miniature" />
                        <input
                            type="file"
                            className="w-[50%] mx-auto pt-3"
                            onChange={e => handleImageChange('miniature', e.target.files[0])}
                        />
                    </div>
                    <div className="space-y-2 flex-1">
                        <p>Game Name</p>
                        <input
                            className="input w-full"
                            placeholder="New name"
                            type="text"
                            value={gameData.name}
                            onChange={e => handleInputChange('name', e.target.value)}
                        />
                        <p>Price</p>
                        <input
                            className="input w-full"
                            placeholder="Enter new price"
                            type="text"
                            value={gameData.price}
                            onChange={e => handleInputChange('price', e.target.value)}
                        />
                        <p>Genre</p>
                        <input
                            className="input w-full"
                            placeholder="Set a new genre"
                            type="text"
                            value={gameData.genre}
                            onChange={e => handleInputChange('genre', e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className='w-[45rem] flex flex-col mt-5'>
                <h1 className='titleBold mb-2'>Description</h1>
                <div className='p-3 bg-main-color w-full'>
                    <input
                        className='input h-[5rem]'
                        type='text'
                        placeholder='Edit description'
                        value={gameData.description}
                        onChange={e => handleInputChange('description', e.target.value)}
                    />
                </div>

                <h1 className='titleBold mt-5 mb-2'>Minimum Requirements</h1>
                <div className="p-3 bg-main-color space-y-1 w-full">
                    {['os', 'processor', 'memory', 'storage', 'gpu'].map(field => (
                        <div key={field} className="flex space-x-2 items-center">
                            <p className="w-24">{field.charAt(0).toUpperCase() + field.slice(1)}:</p>
                            <input
                                className="input flex-1"
                                type="text"
                                placeholder={`Enter ${field} requirements`}
                                value={gameData.minRequirements[field]}
                                onChange={e => handleNestedInputChange('minRequirements', field, e.target.value)}
                            />
                        </div>
                    ))}
                </div>

                <h1 className='titleBold mt-5 mb-2'>Recommended Requirements</h1>
                <div className="p-3 bg-main-color space-y-1 w-full">
                    {['os', 'processor', 'memory', 'storage', 'gpu'].map(field => (
                        <div key={field} className="flex space-x-2 items-center">
                            <p className="w-24">{field.charAt(0).toUpperCase() + field.slice(1)}:</p>
                            <input
                                className="input flex-1"
                                type="text"
                                placeholder={`Enter ${field} requirements`}
                                value={gameData.recRequirements[field]}
                                onChange={e => handleNestedInputChange('recRequirements', field, e.target.value)}
                            />
                        </div>
                    ))}
                </div>

                <div className='pt-1'>
                    <button className='btn mt-3' onClick={saveChanges}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditGame;
