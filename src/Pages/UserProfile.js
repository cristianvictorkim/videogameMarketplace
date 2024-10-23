import React from 'react';
import {getGames} from '../Entities/User';
import PurchaseHistory from '../components/PurchaseHistory';
import {useState, useEffect} from 'react';
import pfp from '../assets/pfp.png';

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
            <div className='w-[45rem] space-y-5'>    
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
                <h1 className='titleBold'>
                        Edit profile
                </h1>
                <div className='flex space-x-3'>
                    <div className='w-[50%]'>
                        <p>
                            Name
                        </p>
                        <div className='pb-3'>
                            <input
                                className='input'
                                placeholder='Enter your name'
                                type='text'
                            />
                        </div>
                        <p>
                            Email
                        </p>
                        <div className='pb-3'>
                            <input
                                className='input'
                                placeholder='Enter your email'
                                type='text'
                            />
                        </div>
                        <p>
                            Phone Number
                        </p>
                        <div className='pb-3'>
                            <input
                                className='input'
                                placeholder='Enter your phone number'
                                type='text'
                            />
                        </div>
                        <p>
                            Address
                        </p>
                        <div className='pb-3'>
                            <input
                                className='input'
                                placeholder='Enter your address'
                                type='text'
                            />
                        </div >
                        <p>
                            Date of birth
                        </p>
                        <div className='pb-3'>
                            <input
                                className='input'
                                placeholder='DD/MM/YYYY'
                                type='date'
                            />
                        </div>
                        <p>
                            Current password
                        </p>
                        <div className='pb-3'>
                            <input
                                className='input'
                                placeholder='Enter your current password to make changes'
                                type='password'
                            />
                        </div>

                    </div>
                    <div className='w-[50%]'>
                        <p>
                            New password
                        </p>
                        <div className='pb-3'>
                            <input
                                className='input'
                                placeholder='Enter your name'
                                type='password'
                            />
                        </div>
                        <p>
                            Confirm new password
                        </p>
                        <div className='pb-3'>
                            <input
                                className='input'
                                placeholder='Enter your name'
                                type='password'
                            />
                        </div>
                        <div className='avatarChange flex'>
                            <div className='p-5 space-y-5'>
                                <img 
                                    className='tinyPic' 
                                    src=''
                                />
                                <img 
                                    className='tinyPic' 
                                    src=''
                                />
                                <img 
                                    className='tinyPic' 
                                    src=''
                                />
                            </div>
                            <div className='pt-5'>
                                <img
                                    className=''
                                    src={pfp}
                                />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <button className='btn'>
                    Save Changes
                </button>
            </div>
            
        </div>
    );
};

export default UserProfile;