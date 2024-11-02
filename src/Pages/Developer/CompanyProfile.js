import { UserContext } from '../../components/Common/UserContext';
import { useState, useEffect, useContext } from 'react';
import DeveloperGameCard from '../../components/DeveloperComponents/DeveloperGameCard';
import { getPfp, setPfp } from "../../Entities/User";
import React from 'react';
import { getGames } from '../../Entities/Game';

const CompanyProfile = () => {
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

    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTempProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveChanges = () => {
        setUserProfilePicture(tempProfilePicture);
        setPfp(tempProfilePicture);
        if (tempUsername !== '') {
            setUsername(tempUsername);
        } else {
            alert("Some fields are incomplete");
        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="titleBold text-center p-3">{username}</h1>
            <div className="space-y-5">
                <DeveloperGameCard />
                <DeveloperGameCard />
            </div>

            <h1 className="titleBold text-center p-5">Edit profile</h1>
            <div className="flex justify-center">
                <div className="flex space-x-3 w-[45rem]">
                    <div className="w-[50%]">
                        <p>Name</p>
                        <div className="pb-3">
                            <input
                                className="input"
                                placeholder="Enter your name"
                                type="text"
                                value={tempUsername}
                                onChange={(e) => setTempUsername(e.target.value)}
                            />
                        </div>
                        <p>Email</p>
                        <div className="pb-3">
                            <input
                                className="input"
                                placeholder="Enter your email"
                                type="text"
                            />
                        </div>
                        <p>Phone Number</p>
                        <div className="pb-3">
                            <input
                                className="input"
                                placeholder="Enter your phone number"
                                type="text"
                            />
                        </div>
                        <p>Address</p>
                        <div className="pb-3">
                            <input
                                className="input"
                                placeholder="Enter your address"
                                type="text"
                            />
                        </div>
                        <p>Date of birth</p>
                        <div className="pb-3">
                            <input
                                className="input"
                                placeholder="DD/MM/YYYY"
                                type="date"
                            />
                        </div>
                        <p>Current password</p>
                        <div className="pb-3">
                            <input
                                className="input"
                                placeholder="Enter your current password to make changes"
                                type="password"
                            />
                        </div>
                        <button className="btn self-start mt-4" onClick={handleSaveChanges}>
                            Save Changes
                        </button>
                    </div>
                    <div className="w-[50%]">
                        <p>New password</p>
                        <div className="pb-3">
                            <input
                                className="input"
                                placeholder="Enter your new password"
                                type="password"
                            />
                        </div>
                        <p>Confirm new password</p>
                        <div className="pb-3">
                            <input
                                className="input"
                                placeholder="Confirm your new password"
                                type="password"
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
            </div>
        </div>
    );
};

export default CompanyProfile;
