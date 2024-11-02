import React from 'react';

const PurchaseHistory = ({ game }) => {
    
    return(
        <div className='flex justify-center'>
            <ul className='flex space-x-10 pb-5'>
                <li>
                    {game.gameTitle}
                </li>
                <li>
                    {game.purchaseDate}
                </li>
                <li>
                    {game.price}
                </li>
                <li>
                    {game.operatingSystem}
                </li>
                <li>
                    {game.genre}
                </li>
                <li>
                    {game.rating}
                </li>
            </ul>
        </div>
    );
};

export default PurchaseHistory;