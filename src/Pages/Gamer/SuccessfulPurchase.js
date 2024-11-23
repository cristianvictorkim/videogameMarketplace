import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

import PurchasedGameCard from 'components/Common/PurchasedGameCard';


const SuccessfulPurchase = () => {
    const location = useLocation();
    const params = useParams();
    const { games } = location.state || {};   

    return (
        <div className="min-h-screen flex flex-col items-center mt-10">
            <div className="bg-main-color inline-block text-center p-4">
                <h1 className="titleBold">
                    Congratulations! Your purchase was successful.
                </h1>
                {games && games.length > 0 ? (
                    games.map((game) => (
                        <PurchasedGameCard
                            key={game.gameId}
                            image={game.bannerUrl}
                            title={game.title}
                            price={game.price}
                            gameId={game.gameId}
                            minimumRequirements={game.systemRequirements.minimum}
                        />
                    ))
                ) : (
                    <h3 className="flex items-center justify-around rounded-full">
                        No games purchased.
                    </h3>
                )}
            </div>
            <button className="btn mt-4">
                <Link to={`/${params.userId}/UserProfile`}>View my purchases</Link>
            </button>
        </div>
    );
};

export default SuccessfulPurchase;