import React from 'react';

const AddComment = () => {
    return(
        <div className=''>
            <h1 className='font-bold pb-1'>
                Add a comment
            </h1>
            <div className='bg-main-color p-3 rounded-lg'>   
                <h1 className=''>
                    Write a review about the game
                </h1>
                <div className='flex'> 
                    <img
                        src='https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'
                        className='profilePic p-4'
                    />
                    <div className='w-full p-2 bg-white mt-3 rounded'>
                        <input 
                            type='text'
                            className='w-full h-full '
                            placeholder='Escribe tu comentario'
                        />
                    </div>
                </div>
                <div className='flex'>
                    <button className='btn'>
                        Score
                    </button>
                </div>   
            </div>
            <button className='btn mt-2'>
                Submit
            </button>
        </div>
    );
};

export default AddComment;