import React, {useState, useEffect, useContext} from 'react';

import PurchaseHistory from 'components/Common/PurchaseHistory';
import { UserContext } from 'components/Common/UserContext';

import { getUserProfile } from 'Entities/User';
import {getPfp, setPfp } from "Entities/User";
import luffy from 'assets/User/luffy.png';
import chopper from 'assets/User/chopper.png';
import nami from 'assets/User/nami.png';

const UserProfile = () => {
    
    const [tempProfilePicture, setTempProfilePicture] = useState(getPfp());
    const { profile, setProfile } = useContext(UserContext);
    const [clientProfile, setClientProfile] = useState({ purchases : [] });
    const [profileChanges, setProfileChanges] = useState({
            username : profile.username,
            phoneNumber : profile.phoneNumber,
            address : profile.address,
            newPassword : profile.newPassword,
            newPasswordRetry : profile.newPasswordRetry,
        });   

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        const clientProfile = await getUserProfile();
        setClientProfile(clientProfile);
    };
    
    const handleProfilePictureChange = (newPfp) => {
        setTempProfilePicture(newPfp);
    };

    async function handleSubmit(e) {
        for (const change in profileChanges)
        {
            if(change !== '')
            {
                setProfile((previousValue) => ({
                    ...previousValue,
                    [change]: profileChanges[change] 
                }))
            }
        }
    }

    function handleChange(e) {
        const { name, value } = e.target
        setProfileChanges((previousValue) => ({
            ...previousValue,
            [name]: value 
        }))
    }

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
                        clientProfile.purchases.length > 0 ? (
                            clientProfile.purchases.map((game, index) => (
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
                <form onSubmit={handleSubmit}>
                    <div className='flex space-x-3'>
                        <div className='w-[50%]'>
                            <p>
                                Username
                            </p>
                            <div className='pb-3'>
                                <input
                                    className='input'
                                    placeholder='Enter new Username'
                                    name='username'
                                    type='text'
                                    value={profileChanges.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>
                                Phone Number
                            </p>
                            <div className='pb-3'>
                                <input
                                    className='input'
                                    placeholder='Enter your new phone number'
                                    type='text'
                                    name="phoneNumber"
                                    value={profileChanges.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>
                                Address
                            </p>
                            <div className='pb-3'>
                                <input
                                    className='input'
                                    placeholder='Enter your new address'
                                    type='text'
                                    name="address"
                                    value={profileChanges.address}
                                    onChange={handleChange}
                                />
                            </div >
                            <p>
                                Current password
                            </p>
                            <div className='pb-3'>
                                <input
                                    className='input'
                                    placeholder='Enter your current password to make changes'
                                    type='password'
                                    name="password"
                                    value={profileChanges.password}
                                    onChange={handleChange}
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
                                    name='newPassword'
                                    value={profileChanges.newPassword}
                                    onChange={handleChange}
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
                                    name='newPasswordRetry'
                                    value={profileChanges.newPasswordRetry}
                                    onChange={handleChange}
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
                    <button className='btn' type='submit'>
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;