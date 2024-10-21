import React from 'react';
import GameCard from '../components/GameCard';
import { useLocation } from 'react-router-dom';

const SearchedGames = () => {
    const location = useLocation();
    const { state } = location;
    const games = state?.games || [];

    return (
        <div className="min-h-screen">
            <h1 className="text-center font-bold pt-5">
                Searched results
            </h1>
            {games.length > 0 ? ( 
                games.map((game) => (
                    <GameCard
                        key={game.gameId}
                        image={game.bannerUrl}
                        title={game.title}
                        price={game.price}
                        score={game.rating}
                        gameId={game.gameId}
                    />
                ))
            ) : (
                <p className="text-center pt-5">No se encontraron juegos.</p>
            )}
        </div>
    );
};

export default SearchedGames;