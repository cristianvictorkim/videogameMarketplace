import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from 'assets/Misc/placeholder-image.jpg'

const GameCard = ({ gameId, image, title, price, score, publisherId}) => {

    // Game card la cual muestra la informacion del juego.
    return (
        <div className='bg-main-color mx-auto mt-[2rem] rounded-lg w-full max-w-2xl border-2 border-black'>    
            <div className="h-[14rem] w-full flex">
                <div className='w-[65%] h-full flex'>
                    <img 
                        src={image} 
                        alt={placeholder} 
                        className="object-cover w-full rounded-lg" 
                    />
                </div>
                <div className="w-[35%] h-full flex flex-col justify-center items-center space-y-5">
                    <h2 className="text-lg font-bold text-[25px] text-center">
                        {title}
                    </h2>
                        <p className="text-gray-700 text-sm text-[17px] ">
                        Rating: {score}
                    </p>
                    <span className="text-[16px]">
                            ${price}
                    </span>
                    <Link to={"/Host/GameDetails/?" + new URLSearchParams({
                            gameId : gameId,
                            publisherId : publisherId
                        }).toString()}>
                        <button className="btn">
                            View Details   
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
