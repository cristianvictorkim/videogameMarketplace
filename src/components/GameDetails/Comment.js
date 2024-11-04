import React from 'react';

const Comment = ({ username, comment, rating }) => {
    return (
        <div className='my-3'>
            <div className='bg-main-color p-4 rounded-lg flex flex-col'>   
                <h1 className='font-bold'>{username}</h1>
                <p className='pl-5 pt-2 pb-2'>{comment}</p>
                <p className='font-semibold'>Rating: {rating.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Comment;
