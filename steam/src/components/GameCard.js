import React from 'react';

const GameCard = ({ image, title, price, score }) => {
    return (
        <div className="bg-[#EAB2CE] rounded-lg flex items-center  w-full max-w-2xl mx-auto ">
            <img 
                src={image} 
                alt={title} 
                className="h-40 object-cover rounded-lg mr-4" 
            />
            <div className="space-y-3">
                <h2 className="text-lg font-bold">
                    {title}
                </h2>
                <p className="text-gray-700 text-sm">
                    Rating: {score}
                </p>
                <div className="flex justify-between items-center">
                    <span className="">
                        ${price}
                    </span>
                </div>
                <button className="bg-[#994B54] rounded">
                    <p className='text-black my-1 mx-1'>
                        View Details
                    </p>
                </button>
            </div>
        </div>
    );
};

export default GameCard;