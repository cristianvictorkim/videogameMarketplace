import React, { useEffect, useState } from 'react';
import PurchasedGameCard from '../components/PurchasedGameCard';
import { Link } from 'react-router-dom';
import { getGames } from '../Entities/Game'; 

const SuccessfulPurchase = () => {
    const [purchasedGames, setPurchasedGames] = useState([]);

    useEffect(() => {
        const games = getGames();
        setPurchasedGames(games);
    }, []);

    return (
        <div className='min-h-screen flex flex-col items-center mt-10'>
            <div className='bg-main-color inline-block text-center p-4'>
                <h1 className='titleBold'>
                    Congratulations! Your purchase was successful.
                </h1>
                {purchasedGames.length > 0 ? (
                    purchasedGames.map((game) => (
                        <PurchasedGameCard
                            key={game.gameId}
                            image={game.image}
                            title={game.title}
                            price={game.price}
                            purchasedDate={game.purchaseDate}
                            gameId={game.gameId}
                        />
                    ))
                ) : (
                    <p>No games found.</p>
                )}
            </div>
            <button className='btn mt-4'>
                <Link to={"/UserProfile"}>View my purchases</Link>
            </button>
        </div>
    );
};

export default SuccessfulPurchase;
