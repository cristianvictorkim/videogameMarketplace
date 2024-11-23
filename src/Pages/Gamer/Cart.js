import React from 'react';
import RemovableGameCard from 'components/Common/RemovableGameCard';
import { useNavigate } from 'react-router-dom';
import { confirmPurchase, getUserId } from 'Entities/User';
import { getCartForUser, removeGameFromCart } from 'Entities/Cart';

import { wait } from '@testing-library/user-event/dist/utils';


const Cart = () => {

    const [gameCards, setGameCards] = React.useState([]);
    const [cartTotal, setCartTotal] = React.useState(0);
    const [searchTerm, setSearchTerm] = React.useState(""); 
    const navigate = useNavigate();
    let userId = getUserId();
    
    const handlePayment = () => {
        const cardNumber = prompt("Please enter your card number:");
        const cardholderName = prompt("Please enter the cardholder's name:");
    
        if (cardNumber && cardholderName) {
            confirmPurchase(userId, gameCards);
            navigate(`/${userId}/SuccessfulPurchase`, { state: { games: gameCards } });
        } else {
            alert("Both card number and cardholder's name are required.");
        }
    };
    
    React.useEffect(() => { 
        async function loadGames()
        {
            await wait(200);
            const gameCardData = await getCartForUser(userId);
            setGameCards(gameCardData.games);
            setCartTotal(gameCardData.total);
        }
        
        loadGames();
    }, [])

    const filteredGameCards = gameCards.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <div className='min-h-screen'>
            <div className='flex flex-col items-center justify-center'> 
                <div className='space-y-4'>
                    <h1 className='text-center text-2xl font-bold pt-5 '>Cart</h1>    
                    <input type="search"
                        placeholder='search for game...'
                        className='pl-5 rounded-full w-[100%]'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    {
                        filteredGameCards.length > 0 ? (
                            filteredGameCards.map((game, index) => (
                                <RemovableGameCard
                                    key={ index}
                                    gameId={ game._id }
                                    image={ game.bannerUrl }
                                    title={ game.title }
                                    price={ game.price }
                                    score={ game.score }
                                    publisherId={ game.publisherId }
                                    removeFromFunction={() => 
                                        {
                                            let index = gameCards.indexOf(game._id);
                                            if( index > -1 )
                                            {
                                                let cartCopy = gameCards;
                                                cartCopy.splice(index, 1);
                                                setGameCards(cartCopy);
                                            }
                                            removeGameFromCart(getUserId(), game._id);
                                            window.location.reload(false);
                                        }
                                    }
                                /> 
                            ))
                        ) : (
                            <h3 className="flex items-center justify-around rounded-full"> No games found </h3>
                        )
                    }
                </div>
                {
                    filteredGameCards.length > 0 && (
                    <div className='my-5 bg-main-color p-4 flex flex-col items-center justify-center border-2 border-black'>
                        <p>
                            Total estimated to pay ${cartTotal.toFixed(2)}
                        </p>
                        <button className='btn w-[40%]' onClick={handlePayment}>
                            Pay
                        </button>
                    </div>
                    )
                }
            </div>
        </div>
    );
}

export default Cart;