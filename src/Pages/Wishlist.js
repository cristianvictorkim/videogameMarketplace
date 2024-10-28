import React from 'react';
import RemovableGameCard from '../components/RemovableGameCard';
import { getWishlistFromUser, removeGameFromWishlist } from '../Entities/Wishlist';
import { getUserId } from '../Entities/User';

const Wishlist = () => {
    const [gameCards, setGameCards] = React.useState([]);

    let userId = getUserId();
    
    React.useEffect(() => { 
        async function loadGames()
        {
            const gameCardData = await getWishlistFromUser(userId);
            setGameCards(gameCardData);
        }
        
        loadGames();
    }, [])

    return(
        <div className=' min-h-screen'>
            <div className='flex flex-col items-center justify-center'> 
                <div className='space-y-4'>
                    <h1 className='text-center text-2xl font-bold pt-5 '>Wishlist</h1>    
                    <input type="search"
                        placeholder='search for game...'
                        className='pl-5 rounded-full w-[100%]' 
                    />
                    {
                        gameCards.map((game, index) => (
                            <RemovableGameCard
                                key={index}
                                gameId={game.gameId}
                                image={game.bannerUrl}
                                title={game.title}
                                price={game.price}
                                score={game.rating}
                                publisherId={game.publisherId}
                                removeFromFunction={() => 
                                    {
                                        let index = gameCards.indexOf(game.gameId);
                                        if(index > -1)
                                        {
                                            let wishlistCopy = gameCards;
                                            wishlistCopy.splice(index, 1);
                                            setGameCards(wishlistCopy);
                                        }
                                        removeGameFromWishlist(game.removeUrl);
                                        window.location.reload(false);
                                    }
                                }
                            /> 
                        ))
                    }                  
                </div>
            </div>
        </div>
    );
};

export default Wishlist;