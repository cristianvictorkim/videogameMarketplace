import React from 'react';

const PurchaseHistory = ({ game }) => {
    return (
        <div className="flex justify-center">
            <ul className="grid grid-cols-5 gap-4 text-center border-b border-gray-300 pb-2 w-full max-w-4xl">
                <li className="font-medium">
                    {game.gameTitle}
                </li>
                <li>
                    {game.purchaseDate}
                </li>
                <li>
                    ${game.price.toFixed(2)}
                </li>
                <li>
                    {game.genre}
                </li>
                <li>
                    {game.score}/10
                </li>
            </ul>
        </div>
    );
};

export default PurchaseHistory;