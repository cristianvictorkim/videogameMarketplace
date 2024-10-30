import React from 'react';
import {getGames} from '../Entities/User';
import PurchaseHistory from '../components/PurchaseHistory';
import {useState, useEffect, useContext} from 'react';
import {getPfp, setPfp } from "../Entities/User";
import luffy from '../assets/luffy.png';
import chopper from '../assets/chopper.png';
import nami from '../assets/nami.png';
import { UserContext } from '../components/UserContext';


const UserProfile = () => {
    
    const [games, setGames] = useState([]);
    const { username, setUsername, setUserProfilePicture } = useContext(UserContext);
    const [tempUsername, setTempUsername] = useState("");
    const [tempProfilePicture, setTempProfilePicture] = useState(getPfp());
    
    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        const allGames = await getGames();
        setGames(allGames);
    };
    
    const handleProfilePictureChange = (newPfp) => {
        setTempProfilePicture(newPfp);
    };

    const handleSaveChanges = () => {
        setUserProfilePicture(tempProfilePicture);
        setPfp(tempProfilePicture);
        if(tempUsername !== ''){
            setUsername(tempUsername);
         }else{
            alert("Some fields are incomplete");
         }
    };

    return(
        <div className='min-h-screen flex justify-center'>
            <div className='w-[45rem] space-y-5'>    
                <h1 className='titleBold'>
                    {username}
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
                                value={tempUsername}
                                onChange={(e) => setTempUsername(e.target.value)}
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
                            <div className='p-3 space-y-5 min-w-[100px]'>
                                <img
                                    className='tinyPic'
                                    src={nami}
                                    alt='Nami'
                                    onClick={() => handleProfilePictureChange(nami)}
                            />
                                <img
                                    className='tinyPic'
                                    src={chopper}
                                    alt='Chopper'
                                    onClick={() => handleProfilePictureChange(chopper)}
                                />
                                <img
                                    className='tinyPic'
                                    src={luffy}
                                    alt='Luffy'
                                    onClick={() => handleProfilePictureChange(luffy)}
                                />
                            </div>
                            <div className='pt-3 flex-grow h-full'>
                                <img
                                    className='w-full h-full'
                                    src={tempProfilePicture}
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button className='btn' onClick={handleSaveChanges}>
                    Save Changes
                </button>
            </div>
            
        </div>
    );
};

export default UserProfile;