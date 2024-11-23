import React, { useState } from 'react';
import placeholder from 'assets/Misc/placeholder-image.jpg';
import Cookies from 'js-cookie';
import { getToken, getUserId } from 'Entities/User';

const CreateGame = () => {
    const [gameData, setGameData] = useState({
        name: '',
        price: '',
        genre: '',
        mainPhoto: placeholder,
        miniature: placeholder,
        description: '',
        minRequirements: {
            os: '',
            processor: '',
            memory: '',
            storage: '',
            gpu: ''
        },
        recRequirements: {
            os: '',
            processor: '',
            memory: '',
            storage: '',
            gpu: ''
        }
    });

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

    const saveChanges = async () => {
        const token = getToken();
        const id = getUserId();
        
        try {
            // Datos que se enviarán al backend
            const gamePayload = {
                title: gameData.name,
                price: gameData.price,
                genre: gameData.genre,
                description: gameData.description,
                systemRequirements: {
                    minimum: gameData.minRequirements,
                    recommended: gameData.recRequirements
                },
                OS: gameData.minRequirements.os,
                bannerUrl: gameData.mainPhoto,
                gameplayUrl: gameData.miniature,
                publisherId: id,
                publisher: Cookies.get('publisherTitle'),
                language: 'English',
                playerCount: 1, 
                isHidden: false 
            };

            console.log(gamePayload);

            // Realizar la solicitud POST al backend usando fetch
            const response = await fetch('http://localhost:5000/games', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,  // El token se pasa como "Bearer" en el encabezado
                    'Content-Type': 'application/json'   // Especifica que estamos enviando JSON
                },
                body: JSON.stringify(gamePayload)  // Convierte el objeto a JSON
            });

            // Verificar si la respuesta fue exitosa
            if (!response.ok) {
                throw new Error('Error creating game');
            }

            // Parsear la respuesta JSON
            const responseData = await response.json();

            // Manejo de la respuesta exitosa
            console.log('Game created:', responseData);
            alert('Game created successfully!');
        } catch (error) {
            // Manejo de errores
            console.error('Error creating game:', error);
            alert('Error creating game');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className='p-5'>
                <h1 className='titleBold'>Create Game</h1>
            </div>
            <div className='flex justify-center'>
                <div className="flex w-[60rem] space-x-10">
                    <div className="flex-1 flex flex-col items-center">
                        <p>Main photo</p>
                        <img src={gameData.mainPhoto} className="mainPhoto" alt="Main" />
                        <input
                            type="file"
                            className="w-[50%] mx-auto pt-3"
                            onChange={e => handleInputChange('mainPhoto', URL.createObjectURL(e.target.files[0]))}
                        />
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <p>Miniature</p>
                        <img src={gameData.miniature} className="miniature w-full object-cover h-48" alt="Miniature" />
                        <input
                            type="file"
                            className="w-[50%] mx-auto pt-3"
                            onChange={e => handleInputChange('miniature', URL.createObjectURL(e.target.files[0]))}
                        />
                    </div>
                    <div className="space-y-2 flex-1">
                        <p>Game Name</p>
                        <input
                            className="input w-full"
                            placeholder="Name"
                            type="text"
                            value={gameData.name}
                            onChange={e => handleInputChange('name', e.target.value)}
                        />
                        <p>Price</p>
                        <input
                            className="input w-full"
                            placeholder="Enter price"
                            type="text"
                            value={gameData.price}
                            onChange={e => handleInputChange('price', e.target.value)}
                        />
                        <p>Genre</p>
                        <input
                            className="input w-full"
                            placeholder="Set genre"
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

export default CreateGame;
