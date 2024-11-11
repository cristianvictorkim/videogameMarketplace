import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { UserContext } from 'components/Common/UserContext';
import DeveloperGameCard from 'components/DeveloperComponents/DeveloperGameCard';
import HiddenDeveloperGameCard from 'components/DeveloperComponents/HiddenDeveloperGameCard';

import { getPfp, getUserId } from "Entities/User";
import { getPublisherProfile, updateProfile } from 'Entities/Publisher';
import { uploadPicture } from 'Entities/Pictures';

const CompanyProfile = () => {
     
    const params = useParams();

    const [tempProfilePicture, setTempProfilePicture] = useState(getPfp());
    
    const [games, setGames] = useState([]);
    const [hiddenGames, setHiddenGames] = useState([]);

    const { profile, setProfile } = useContext(UserContext);
    const [profileChanges, setProfileChanges] = useState({
        name : '',
        description : '',
        password : '',
        newPassword : '',
        newPasswordRetry : ''
    });   
    
    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        const publisher = await getPublisherProfile(getUserId());
        let hidden = [];
        let show = [];

        publisher.games.forEach(game => {
            if (game.isHidden) hidden.push(game);
            else show.push(game)
        });

        setGames(show);
        setHiddenGames(hidden);
    };

    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTempProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
        uploadPicture(file);
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

    return (
        <div className="min-h-screen">
            <h1 className="titleBold text-center p-3">{profile.username}</h1>
            {
                games.length > 0 ? (
                    <div className="space-y-5">
                        {
                            games.map((game, index) => (
                                <DeveloperGameCard key={index} game={game} />
                            ))
                        }
                    </div>
                ) : (
                    <h1 className="text-center p-5">No games available.</h1>
                )
            }
            <h1 className="titleBold text-center p-3">Hidden Games</h1>
            {
            hiddenGames.length > 0 ? (<div className="space-y-5">
                    {
                        games.map((game, index) => (
                            <HiddenDeveloperGameCard key={index} game={game} />
                        ))
                    }
                </div>
            ) : (
                <h1 className="text-center p-5">No hidden games.</h1>
            )}
            <h1 className="titleBold text-center p-5">Edit profile</h1>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit}>
                    <div className="flex space-x-3 w-[45rem]">
                        <div className="w-[50%]">
                            <p>Name</p>
                            <div className="pb-3">
                                <input
                                    className='input'
                                    placeholder='Enter new name'
                                    name='name'
                                    type='text'
                                    value={profileChanges.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>Description</p>
                            <div className="pb-3">
                                <input
                                    className='input'
                                    placeholder='Enter new description'
                                    name='description'
                                    type='text'
                                    value={profileChanges.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>Current password</p>
                            <div className="pb-3">
                                <input
                                    className='input'
                                    placeholder='Enter your password'
                                    name='password'
                                    type='password'
                                    value={profileChanges.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex space-x-2'>  
                                <button className="btn self-start mt-4" type='submit'>
                                    Save Changes
                                </button>
                                <Link to={`/${params.userId}/CreateGame`} className="btn self-start mt-4">
                                    Upload game
                                </Link>
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <p>New password</p>
                            <div className="pb-3">
                                <input
                                    className='input'
                                    placeholder='Enter your new password'
                                    name='newPassword'
                                    type='password'
                                    value={profileChanges.newPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>Confirm new password</p>
                            <div className="pb-3">
                                <input
                                    className='input'
                                    placeholder='Repeat your new password'
                                    name='repeatNewPassword'
                                    type='password'
                                    value={profileChanges.repeatNewPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="avatarChange flex items-center justify-center">
                                <div className="pt-3">
                                    <img
                                        className="developerPic"
                                        src={tempProfilePicture}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleProfilePictureChange}
                                className='pt-3'
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CompanyProfile;
