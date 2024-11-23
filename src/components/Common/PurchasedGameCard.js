import React from 'react';
import placeholder from 'assets/Misc/placeholder-image.jpg'

const PurchasedGameCard = ({ image, title, price, minimumRequirements}) => {
    // Game card de un juego comprado
    return (
        <div className='bg-main-color mx-auto mt-[2rem] rounded-lg w-full max-w-2xl border-black'>    
            <div className="h-[14rem] w-full flex">
                <div className='w-[65%] h-full flex'>
                    <img 
                        src={image} 
                        alt={placeholder} 
                        className="object-cover w-full rounded-lg" 
                    />
                </div>
                <div className="w-[35%] h-full flex-col text-left pl-5">
                    <h2 className="text-lg font-bold text-[20px]">
                        {title}
                    </h2>
                    <span className="">
                        Price: ${price}
                    </span>
                    <p className="">
                    </p>
                    <ul>
                        <li>Minimum Requirements: </li>
                        <li>{minimumRequirements.cpu}</li>
                        <li>{minimumRequirements.gpu}</li>
                        <li>{minimumRequirements.ram}</li>
                        <li>{minimumRequirements.storage}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PurchasedGameCard;