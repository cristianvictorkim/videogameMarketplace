import React, {useState, useEffect, useContext} from 'react';

import PurchaseHistory from '../../components/Common/PurchaseHistory';
import { UserContext } from '../../components/Common/UserContext';

import { getUserProfile } from '../../Entities/User';
import {getPfp, setPfp } from "../../Entities/User";
import luffy from 'assets/User/luffy.png';
import chopper from 'assets/User/chopper.png';
import nami from 'assets/User/nami.png';

const UserProfile = () => {
    
    const { profile, setProfile } = useContext(UserContext);

    const [tempUsername, setTempUsername] = useState("");
    const [tempProfilePicture, setTempProfilePicture] = useState(getPfp());
    
    const [purchaseHistory, setPurchaseHistory] = useState([]);
    const [clientProfile, setClientProfile] = useState({});

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        const profile = await getUserProfile();
        setClientProfile(profile);
        setPurchaseHistory(profile.purchases);
    };
    
    const handleProfilePictureChange = (newPfp) => {
        setTempProfilePicture(newPfp);
    };

    const handleSaveChanges = () => {

        setPfp(tempProfilePicture);
        if(tempUsername !== ''){
            setProfile({ username: tempUsername, profilePicture: tempProfilePicture, type : profile.type });
         }else{
            alert("Some fields are incomplete");
         }
    };

    return(
        <div className='min-h-screen flex justify-center'>
            <div className='w-[45rem] space-y-5'>    
                <h1 className='titleBold'>
                    {clientProfile.userName}
                </h1>
                <div>
                    <h2 className='titleBold pb-3'>
                        Purchases
                    </h2>
                    {
                        purchaseHistory.length > 0 ? (
                            purchaseHistory.map((game, index) => (
                                <PurchaseHistory
                                    key={index}
                                    game={game}
                                /> 
                            ))
                        ) : (
                            <p>No purchases found.</p>
                        )
                    }
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