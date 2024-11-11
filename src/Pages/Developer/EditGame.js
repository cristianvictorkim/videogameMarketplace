import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import placeholder from 'assets/Misc/placeholder-image.jpg';
import { changeBannerImage, changeGamePlayImage } from 'Entities/Game';

const EditGame = () => {
    const location = useLocation();
    const { publisherId } = useParams();
    const { game } = location.state || {};
    console.log('Game data from location.state:', game);

    const [gameData, setGameData] = useState(() => ({
        name: game?.title || '',
        price: game?.price || '',
        genre: game?.genre || '',
        mainPhoto: game?.bannerUrl || placeholder,
        miniature: game?.miniature || placeholder,
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
            fetch(`/api/publishers/profile/${publisherId}`)
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
    
    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        setGameData(prevData => ({
            ...prevData,
            [field]: file
        }));
    };


    const saveChanges = () => {
        const bannerImage = gameData.mainPhoto; 
        const gamePlayImage = gameData.miniature;  
        changeBannerImage(game.gameId ,bannerImage);
        changeGamePlayImage(game.gameId ,gamePlayImage);
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
                        <img src={gameData.mainPhoto} className="mainPhoto" alt="Main" />
                        <input
                            type="file"
                            className="w-[50%] mx-auto pt-3"
                            onChange={e => handleFileChange('mainPhoto', URL.createObjectURL(e.target.files[0]))}
                        />
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <p>Miniature</p>
                        <img src={gameData.miniature} className="miniature w-full object-cover h-48" alt="Miniature" />
                        <input
                            type="file"
                            className="w-[50%] mx-auto pt-3"
                            onChange={e => handleFileChange('miniature', URL.createObjectURL(e.target.files[0]))}
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
                        <button className='btn mt-3' onClick={() => saveChanges()}>
                            Save Changes
                        </button>
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
                    <div className="flex justify-end pt-2">
                        <button className="btn" onClick={() => saveChanges('description')}>
                            Save Changes
                        </button>
                    </div>
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
                    <div className="flex justify-end pt-2">
                        <button className="btn" onClick={() => saveChanges('minRequirements')}>
                            Save Changes
                        </button>
                    </div>
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
                    <div className="flex justify-end pt-2">
                        <button className="btn" onClick={() => saveChanges('recRequirements')}>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditGame;
