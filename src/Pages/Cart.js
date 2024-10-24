import React from 'react';
import Navbar from '../components/Navbar';
import RemovableGameCard from '../components/RemovableGameCard';
import { getUserId } from '../Entities/User';
import { getGameCards } from '../Entities/Game';


const Cart = () => {
        
    const [cartGames, setCartGames] = React.useState([]);
    const [gameCards, setGameCards] = React.useState([]);
    
    let userId = getUserId();
    
    React.useEffect(() => { 
        fetch("http://localhost:3001/get-cart?" + new URLSearchParams({
            userId: userId
            }).toString())
            .then(res => res.json())
            .then(data => setCartGames(data));
    }, [])

    React.useEffect(() => { 
        setGameCards(getGameCards(cartGames))
    }, [cartGames])

    return(
        <div className='min-h-screen'>
            <Navbar/>
            <div className='flex flex-col items-center justify-center'> 
                <div className='space-y-4'>
                    <h1 className='text-center text-2xl font-bold pt-5 '>Cart</h1>    
                    <input type="search"
                        placeholder='search for game...'
                        className='pl-5 rounded-full w-[100%]' 
                    />
                    {
                        cartGames.map((game, index) => (
                            <RemovableGameCard
                                key={index}
                                image={game.bannerUrl}
                                title={game.title}
                                price={game.price}
                                score={game.rating}
                            /> 
                        ))
                    }
                </div>
                <div className='my-5 bg-main-color p-4 flex flex-col items-center justify-center border-2 border-black'>
                    <p>
                        Total estimated to pay $60.0
                    </p>
                    <button className='bg-btn-color my-1 w-[40%] border border-black'>
                        Pay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;