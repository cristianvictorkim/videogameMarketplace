import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../assets/placeholder-image.jpg';

const EditGame = () => {
    return (
            <div className="min-h-screen flex flex-col items-center">
                <div className='p-5'>
                    <h1 className='titleBold'>
                    Edit Game: Game
                </h1>
            </div>
                <div className='flex justify-center'>
                    <div className="flex w-[60rem] space-x-10">
                        <div className="flex-1 flex flex-col items-center">
                            <p>Main photo</p>
                            <img
                                src={placeholder}
                                className="mainPhoto"
                                alt="Main"
                            />
                            <input
                                type="file"
                                className="w-[50%] mx-auto pt-3"
                            />
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                            <p>Miniature</p>
                            <img
                                src={placeholder}
                                className="miniature w-full object-cover h-48"
                                alt="Miniature"
                            />
                            <input
                                type="file"
                                className="w-[50%] mx-auto pt-3"
                            />
                        </div>
                        <div className="space-y-2 flex-1">
                            <p>Game Name</p>
                            <input
                                className="input w-full"
                                placeholder="New name"
                                type="text"
                            />
                            <p>Price</p>
                            <input
                                className="input w-full"
                                placeholder="Enter new price"
                                type="text"
                            />
                            <p>Genre</p>
                            <input
                                className="input w-full"
                                placeholder="Set a new genre"
                                type="text"
                            />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center p-5'>
                    <button className='btn'>
                        Save changes
                    </button>
                </div>
                <div className='w-[45rem] flex flex-col mt-5'>
                    <h1 className='titleBold mb-2'> 
                        Description
                    </h1>
                    <div className='p-3 bg-main-color w-full'>
                        <input className='input h-[5rem]' type='text' placeholder='Edit description' />
                        <div className="flex justify-end pt-2">
                            <button className="btn">
                                Save Changes
                            </button>
                        </div>
                    </div>

                    <h1 className='titleBold mt-5 mb-2'>  {/* Alineado con el contenedor */}
                        Minimum Requirements
                    </h1>
                    <div className="p-3 bg-main-color space-y-1 w-full">
                        <div className="flex space-x-2 items-center">
                            <p className="w-24">OS:</p>
                            <input className="input flex-1" type="text" placeholder="Enter OS requirements" />
                        </div>
                        <div className="flex space-x-2 items-center">
                            <p className="w-24">Processor:</p>
                            <input className="input flex-1" type="text" placeholder="Enter Processor requirements" />
                        </div>
                        <div className="flex space-x-2 items-center">
                            <p className="w-24">Memory:</p>
                            <input className="input flex-1" type="text" placeholder="Enter Memory requirements" />
                        </div>
                        <div className="flex space-x-2 items-center">
                            <p className="w-24">Storage:</p>
                            <input className="input flex-1" type="text" placeholder="Enter Storage requirements" />
                        </div>
                        <div className="flex space-x-2 items-center">
                            <p className="w-24">GPU:</p>
                            <input className="input flex-1" type="text" placeholder="Enter GPU requirements" />
                        </div>
                        <div className="flex justify-end pt-2">
                            <button className="btn">
                                Save Changes
                            </button>
                        </div>
                    </div>

                    <h1 className='titleBold mt-5 mb-2'>  {/* Alineado con el contenedor */}
                        Recommended Requirements
                    </h1>
                    <div className="p-3 bg-main-color space-y-1 w-full">
                        <div className="flex space-x-2 items-center">
                            <p className="w-24">OS:</p>
                            <input className="input flex-1" type="text" placeholder="Enter OS requirements" />
                        </div>
                        <div className="flex space-x-2 items-center">
                            <p className="w-24">Processor:</p>
                            <input className="input flex-1" type="text" placeholder="Enter Processor requirements" />
                        </div>
                        <div className="flex space-x-2 items-center">
                            <p className="w-24">Memory:</p>
                            <input className="input flex-1" type="text" placeholder="Enter Memory requirements" />
                        </div>
                        <div className="flex space-x-2 items-center">
                            <p className="w-24">Storage:</p>
                            <input className="input flex-1" type="text" placeholder="Enter Storage requirements" />
                        </div>
                        <div className="flex space-x-2 items-center">
                            <p className="w-24">GPU:</p>
                            <input className="input flex-1" type="text" placeholder="Enter GPU requirements" />
                        </div>
                        <div className="flex justify-end pt-2">
                            <button className="btn">
                                Save Changes
                            </button>
                        </div>
                    </div>

                </div>
            </div>
    );
};

export default EditGame;