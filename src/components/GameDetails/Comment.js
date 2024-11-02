import React from 'react';

const Comment = () => {
    return(
        <div className=''>
            <h1 className='font-bold pb-1'>
                Comments
            </h1>
            <div className='bg-main-color p-4 rounded-lg flex flex-col'>   
                <h1 className='font-bold'>
                    Username
                </h1>
                <p className='pl-5 pt-2 pb-2'>
                    Comment
                </p>
                <p className='font-semibold'>
                    Rating
                </p>
            </div>
        </div>
    );
};

export default Comment;