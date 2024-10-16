import React from 'react';
import { Link } from 'react-router-dom';

const GameDetails = () => {
    return(
        <div className='gradient min-h-screen flex-col justify-center'> 
            <div className='flex items-center justify-center space-x-8 h-[20rem] mt-10'>
                <div className='h-full flex'>
                    <img 
                        src="https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/LRHHYM3MLBANDKJCZUQU5MQ72Q.jpg"
                        alt="asd"
                        className="object-cover w-full rounded"
                    />
                </div>
                <div className='bg-main-color px-2 h-full rounded flex flex-col'>
                    <div className='flex space-x-3'>    
                        <h2 className='text-lg font-bold'>
                            Title
                        </h2>
                        <p className='text-lg'>
                            Genre
                        </p>
                    </div>
                    <img 
                        src="https://images.ctfassets.net/wn7ipiv9ue5v/2o2zzN8bdBFi6BwGFJR1lK/fab7d2a0fa20e7a8ec13c6400bd21422/N25-BASE-STANDARD_EDITION_ANNOUNCE-NA-STATIC-ESRB-AGN-1920x1080.jpg?w=&h=630&fm=&q="
                        alt="asd"
                        className="max-w-xs max-h-xs"
                    />
                    <p className='font-bold'>
                        Price:
                    </p>
                    <p className='font-bold'>
                        Score:
                    </p>
                    <div className='space-x-2 pt-2'>    
                        <button className='btn'>
                            Add to Wishlist
                        </button>
                        <button className='btn'>
                            <Link to="/">Buy now</Link>
                        </button>
                    </div>
                </div>
                
            </div>
            <div className='pt-5'>
                <h1 className='font-bold pb-1'>
                    Publisher
                </h1>
                <div className='bg-main-color flex border-black'>
                    <img 
                        src='https://upload.wikimedia.org/wikipedia/commons/1/1f/2K_2021_Logo.svg'
                        className='w-[128px] h-[128px] p-4 rounded-full'
                    />
                    <div>    
                        <h1 className='font-bold'>
                            Publisher Name
                        </h1>
                        <p>
                            Publisher Description
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;