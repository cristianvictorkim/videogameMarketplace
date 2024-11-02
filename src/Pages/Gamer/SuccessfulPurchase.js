import React, { useEffect, useState } from 'react';
import PurchasedGameCard from '../../components/Common/PurchasedGameCard';
import { Link } from 'react-router-dom';
import { getUserId } from '../../Entities/User';
import { getCartForUser, removeGameFromCart } from '../../Entities/Cart';
import { wait } from '@testing-library/user-event/dist/utils';


const SuccessfulPurchase = () => {
    
    const [purchasedGames, setPurchasedGames] = useState([]);
    let userId = getUserId();
    
    React.useEffect(() => { 
        async function loadGames()
        {
            await wait(200);
            const gameCardData = await getCartForUser(userId);
            setPurchasedGames(gameCardData.games);
        }
        
        loadGames();
    }, [])

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
                            image={game.bannerUrl}
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
                <Link to={"/Host/UserProfile"}>View my purchases</Link>
            </button>
        </div>
    );
};

export default SuccessfulPurchase;
