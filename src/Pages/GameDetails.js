import React from 'react';
import { Link } from 'react-router-dom';
import Comment from '../components/Comment';
import AddComment from '../components/AddComment';

const GameDetails = () => {
    return(
        <div className='gradient min-h-screen flex flex-col justify-center items-center space-y-6 pb-10'> 
            <div className='flex space-x-8 h-[20rem] mt-10 max-w-[59rem]'>
                <div className='h-full flex'>
                    <img 
                        src="https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/LRHHYM3MLBANDKJCZUQU5MQ72Q.jpg"
                        alt="asd"
                        className="object-cover w-full rounded"
                    />
                </div>
                <div className='bg-main-color px-4 h-full rounded flex flex-col justify-between'>
                    <div>
                        <div className='flex space-x-3 mb-2 mt-1'>    
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
                        <div className='mt-2'>
                            <p className='font-bold'>
                                Price:
                            </p>
                            <p className='font-bold'>
                                Score:
                            </p>
                        </div>
                    </div>
                    <div className='flex space-x-2 pb-3'>    
                        <button className='btn'>
                            Add to Wishlist
                        </button>
                        <button className='btn'>
                            <Link to="/">Buy now</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-[59rem]'>
                <h1 className='font-bold pb-1'>
                    Publisher
                </h1>
                <div className='bg-main-color flex border-black p-4 rounded-lg'>
                    <img 
                        src='https://upload.wikimedia.org/wikipedia/commons/1/1f/2K_2021_Logo.svg'
                        className='profilePic p-4'
                    />
                    <div className='ml-4'>    
                        <h1 className='font-bold'>
                            Publisher Name
                        </h1>
                        <p>
                            Publisher Description
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-[59rem]'>
                <h1 className='font-bold pb-1'>
                    Publisher
                </h1>
                <div className='bg-main-color flex border-black p-4 rounded-lg'>   
                    <p className=''>
                        Game Description
                    </p>
                </div>
            </div>
            <div className='w-[59rem]'>
                <h1 className='font-bold pb-1'>
                    System Requirements
                </h1>
                <div className='bg-main-color border-black p-4 rounded-lg flex justify-between'>   
                    <div className='w-1/2 text-center'>
                        <h2 className='font-semibold'>
                            Minimum Requirements
                        </h2>
                        <p>
                            Details about minimum system requirements.
                        </p>
                    </div>
                    <div className='w-1/2 text-center'>
                        <h2 className='font-semibold'>
                            Recommended Requirements
                        </h2>
                        <p>
                            Details about recommended system requirements.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='w-[59rem]'>
                <Comment/>
            </div>
            <div className='w-[59rem]'>
                <AddComment/>
            </div>
            
        </div>
    );
};

export default GameDetails;
