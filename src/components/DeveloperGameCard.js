import React from 'react';

        
const DeveloperGameCard = () => { 
    // Continuar despues
    return(
        <div className='min-h-screen flex flex-col justify-center items-center space-y-6 pb-10'> 
            <div className='flex space-x-8 h-[20rem] mt-10 max-w-[59rem]'>
                <div className='h-full flex'>
                    <img 
                        src={game.gameplayUrl}
                        alt="asd"
                        className="object-cover w-full rounded"
                    />
                </div>
                <div className='bg-main-color px-4 h-full rounded flex flex-col justify-between'>
                    <div className='flex space-x-2 mb-2 mt-1'>    
                        <h2 className='text-lg font-bold'>
                            Title
                        </h2>
                        <p className='text-lg'>
                            Price
                        </p>
                        <p>
                            Description
                        </p>
                        <p>
                            Genre
                        </p>
                        <div className='flex space-x-4'>
                            <p>
                                Edit
                            </p>
                            <p>
                                Remove
                            </p>
                            <p>
                                Delete
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
};

export default DeveloperGameCard;