import React from 'react';
import {getGames} from '../Entities/User';
import PurchaseHistory from '../components/PurchaseHistory';
import {useState, useEffect} from 'react';

const UserProfile = () => {
    
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        const allGames = await getGames();
        setGames(allGames);
    };

    return(
        <div className='min-h-screen flex justify-center'>
            <div className='w-[42rem] space-y-5'>    
                <h1 className='titleBold'>
                    Username
                </h1>
                <div>
                    <h2 className='titleBold pb-3'>
                        Purchases
                    </h2>
                    {games.length > 0 ? (
                        games.map((game) => (
                            <PurchaseHistory game={game} />
                        ))
                    ) : (
                        <p>No purchases found.</p>
                    )}
                </div>
                <div>
                    <h1 className='titleBold'>
                        Edit profile
                    </h1>
                </div>
            </div>
            
        </div>
    );
};

export default UserProfile;