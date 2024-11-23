import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getGameById, updateGame } from 'Entities/Game';
import { uploadImage } from 'Entities/Image';

const EditGame = () => {

    const PLACEHOLDER = "https://firebasestorage.googleapis.com/v0/b/jovial-beach-442521-q5.firebasestorage.app/o/files%2Fplaceholder-image.jpg?alt=media&token=3e5fdbbd-e06c-4754-a6a0-352159f2e55e";
    const requirements = ['OS', 'Processor', 'Memory', 'Storage', 'Gpu'];
    const formStyle = {
        display: "flex",
        justifyContent: "center",
        flexWrap: "nowrap",
        flexDirection: "column",
        alignItems: "center",
    }

    const { gameTitle, gameId } = useParams();
    let [loading, setLoading] = useState(false);

    const [gameForm, setGameForm] = useState(() => ({
        name: '',
        price: '',
        genre: '',
        mainPhoto: '',
        miniature: '',
        description: '',
        minimumOS: '',
        minimumProcessor: '',
        minimumMemory: '',
        minimumStorage: '',
        minimumGpu: '',
        recommendedOS: '',
        recommendedProcessor: '',
        recommendedMemory: '',
        recommendedStorage: '',
        recommendedGpu: ''
    }));
    

    async function handleSubmit(e) {
        e.preventDefault();
        
        let modifiedData = {};

        for (const field of Object.keys(gameForm))
        {
            if (gameForm[field] !== '')
            {
                modifiedData[field] = gameForm[field]
            }
        }

        console.log(modifiedData)
        let output = await updateGame(gameId, modifiedData);
        
        window.location.reload(false);
        alert(output.message);
    }

    function handleChange(e) {
        const { name, value } = e.target
        setGameForm((previousValue) => ({
            ...previousValue,
            [name]: value 
        }))
    }
    
    const handlePictureChange = async (event) => {
        const file = event.target.files[0];
        const name = event.target.name;

        setLoading(true);
        let output = await uploadImage(file);
        setLoading(false);

        setGameForm((previousValue) => ({
            ...previousValue,
            [name]: output.downloadUrl
        }))
    };

    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className='p-5'>
                <h1 className='titleBold'>Edit Game: {gameTitle}</h1>
            </div>
            <form style={formStyle} onSubmit={handleSubmit}>
                <div className='flex justify-center'>
                        <div className="flex w-[60rem] space-x-10">
                            <div className="flex-1 flex flex-col items-center">
                                <p>Main photo</p>
                                <img src={ gameForm.mainPhoto || PLACEHOLDER } className="mainPhoto" alt="Main" />
                                <input
                                    name= "mainPhoto"
                                    type="file"
                                    className="w-[50%] mx-auto pt-3"
                                    onChange={handlePictureChange}
                                />
                            </div>
                            <div className="flex-1 flex flex-col items-center">
                                <p>Miniature</p>
                                <img src={ gameForm.miniature || PLACEHOLDER } className="miniature w-full object-cover h-48" alt="Miniature" />
                                <input
                                    name='miniature'
                                    type="file"
                                    className="w-[50%] mx-auto pt-3"
                                    onChange={handlePictureChange}
                                />
                            </div>
                            <div className="space-y-2 flex-1">
                                <p>Game Name</p>
                                <input
                                    name="name"
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="New name"
                                    value={gameForm.name}
                                    className="input w-full"
                                />
                                <p>Price</p>
                                <input
                                    name="price"
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Enter new price"
                                    value={gameForm.price}
                                    className="input w-full"
                                />
                                <p>Genre</p>
                                <input
                                    name="genre"
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Set a new genre"
                                    value={gameForm.genre}
                                    className="input w-full"
                                />
                                {
                                    loading ? 
                                    <div className='btn mt-3'>
                                        Uploading Image
                                    </div>
                                    :
                                    <button className='btn mt-3' type='submit'>
                                        Save Changes
                                    </button>
                                }
                            </div>
                        </div>
                </div>
                <div className='w-[45rem] flex flex-col mt-5'>
                    <h1 className='titleBold mb-2'>Description</h1>
                    <div className='p-3 bg-main-color w-full'>
                            <input
                                name="description"
                                onChange={handleChange}
                                type="text"
                                placeholder='Edit description'
                                value={gameForm.description}
                                className="input h-[5rem]"
                            />
                    </div>
                    <h1 className='titleBold mt-5 mb-2'>Minimum Requirements</h1>
                        <div className="p-3 bg-main-color space-y-1 w-full">
                            {
                                requirements.map(field => (
                                    <div key={field} className="flex space-x-2 items-center">
                                        <p className="w-24">{field.charAt(0).toUpperCase() + field.slice(1)}:</p>
                                        <input
                                            name={`minimum${field}`}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder={`Enter ${field} requirements`}
                                            value={gameForm[`minimum${field}`]}
                                            className="input flex-1"
                                        />
                                    </div>
                                ))
                            }
                            <div className="flex justify-end pt-2">
                            </div>
                        </div>
                    <h1 className='titleBold mt-5 mb-2'>Recommended Requirements</h1>
                        <div className="p-3 bg-main-color space-y-1 w-full">
                            {
                                requirements.map( field => (
                                    <div key={field} className="flex space-x-2 items-center">
                                        <p className="w-24">{field.charAt(0).toUpperCase() + field.slice(1)}:</p>
                                        <input
                                            name={`recommended${field}`}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder={`Enter ${field} requirements`}
                                            value={gameForm[`recommended${field}`]}
                                            className="input flex-1"
                                        />
                                    </div>
                                ))
                            }
                            <div className="flex justify-end pt-2">
                            </div>
                        </div>
                </div>
            </form>
        </div>
    );
};

export default EditGame;
