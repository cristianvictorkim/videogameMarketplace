import React, {useState, useEffect, useContext} from 'react';

import PurchaseHistory from 'components/Common/PurchaseHistory';
import { UserContext } from 'components/Common/UserContext';

import { getUserProfile, sProfilePicture, sUsername, updateProfile } from 'Entities/User';
import Cookies from 'js-cookie';

const UserProfile = () => {
    
    const urls = {
        CHOPPER: "https://firebasestorage.googleapis.com/v0/b/jovial-beach-442521-q5.firebasestorage.app/o/files%2Fchopper.png?alt=media&token=74f5f207-ff3d-4729-86c0-43b0a3f93ca4",
        LUFFY: "https://firebasestorage.googleapis.com/v0/b/jovial-beach-442521-q5.firebasestorage.app/o/files%2Fluffy.png?alt=media&token=878754b8-80c7-4999-9931-959af10f5630",
        NAMI: "https://firebasestorage.googleapis.com/v0/b/jovial-beach-442521-q5.firebasestorage.app/o/files%2Fnami.png?alt=media&token=71444fa8-d733-4175-969e-6609f57d9e4f"
    }

    const { profile, setProfile } = useContext(UserContext);
    const [purchases, setPurchases] = useState({ purchases : [] });
    const [profileChanges, setProfileChanges] = useState({
        username : '',
        phoneNumber : '',
        address : '',
        password : '',
        newPassword : '',
        newPasswordRetry : '',
        profilePicture : profile.profilePicture
    });   

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        const purchasesOutput = await getUserProfile();
        setPurchases(purchasesOutput);
    };
    
    const handleProfilePictureChange = async (localUrl) => {
        console.log(localUrl);

        setProfileChanges((previousValue) => ({
            ...previousValue,
            profilePicture: localUrl
        }))
    };

    async function handleSubmit(e) {
        e.preventDefault();

        if(profileChanges.username !== Cookies.get(sUsername))
        {
            Cookies.set(sUsername, profileChanges.username);
            setProfile((previousValue) => ({
                ...previousValue,
                username: profileChanges.username 
            }))
        }

        if(profileChanges.profilePicture !== Cookies.get(sProfilePicture))
        {
            Cookies.set(sProfilePicture, profileChanges.profilePicture);
            setProfile((previousValue) => ({
                ...previousValue,
                profilePicture: profileChanges.profilePicture 
            }))
        }

        let output = await updateProfile(profileChanges);

        alert(output.message);
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
                    {profile.username}
                </h1>
                <div>
                    <h2 className='titleBold pb-3'>
                        Purchases
                    </h2>
                    {
                        purchases.purchases.length > 0 ? (
                            purchases.purchases.map((game, index) => (
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
                                        src={urls.NAMI}
                                        alt='Nami'
                                        onClick={() => handleProfilePictureChange(urls.NAMI)}
                                    />
                                    <img
                                        className='tinyPic'
                                        src={urls.CHOPPER}
                                        alt='Chopper'
                                        onClick={() => handleProfilePictureChange(urls.CHOPPER)}
                                    />
                                    <img
                                        className='tinyPic'
                                        src={urls.LUFFY}
                                        alt='Luffy'
                                        onClick={() => handleProfilePictureChange(urls.LUFFY)}
                                    />
                                </div>
                                <div className='pt-3 flex-grow h-full'>
                                    <img
                                        className='w-full h-full'
                                        src={profileChanges.profilePicture}
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