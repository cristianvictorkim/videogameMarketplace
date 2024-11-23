import React, { useContext } from 'react';
import logo from "assets/Misc/logo.png";
import { Link, useParams } from 'react-router-dom';
import { logOff, sProfilePicture, sUsername } from 'Entities/User'
import { UserContext } from './UserContext';
import Cookies from 'js-cookie';

const Navbar = () => {
    
    const { profile, setProfile, sCLIENT, sDEVELOPER } = useContext(UserContext);
    const params = useParams();

    const handleLogOff = () => {

        setProfile({ 
            username : "username",
            profilePicture : "https://firebasestorage.googleapis.com/v0/b/jovial-beach-442521-q5.firebasestorage.app/o/files%2Fpfp.png?alt=media&token=3332a2a8-5490-40ce-b5d9-4ac5f2876156", 
            type: sCLIENT
        });
        
        logOff();
    }

    switch(profile.type)
    {      
        case sCLIENT: 
            return( 
                <div className={`navbar`}>
                    <div className="logoStyle">
                        <Link to={`/${params.userId}`}>
                            <img src={logo} className="imageStyle" alt="Logo"/>
                        </Link>
                    </div>    
                    <div>
                        <Link to={`/${params.userId}`}>Home</Link>
                    </div>
                    <div className='flex items-center'>
                        <Link to={`/${params.userId}/UserProfile`}>
                        <img 
                            src={profile.profilePicture} 
                            className='w-11 h-11 rounded-full'
                        />
                        </Link>
                        <div className='px-3'>
                            <Link to={`/${params.userId}/UserProfile`}><span>{profile.username}</span></Link> 
                        </div>
                    </div>
                    <div>
                        <Link to={`/${params.userId}/Wishlist`}>Wishlist</Link>
                    </div>
                    <div>
                        <Link to={`/${params.userId}/Cart`}>Cart</Link>
                    </div>
                    <div>
                        <Link to="/Login">
                            <button onClick={() => {handleLogOff()}}>
                                Sign Off
                            </button>
                        </Link>
                    </div>
                </div>
            );
        case (sDEVELOPER):     
            return( 
                <div className={`navbar`}>
                    <div className="logoStyle">
                        <Link to={`/${params.userId}`}>
                            <img src={logo} className="imageStyle" alt="Logo"/>
                        </Link>
                    </div>    
                    <div>
                        <Link to={`/${params.userId}`}>Home</Link>
                    </div>
                    <div className='flex items-center'>
                        <Link to={`/${params.userId}/CompanyProfile`}>
                        <img 
                            src={profile.profilePicture}
                            className='w-11 h-11 rounded-full'
                        />
                        </Link>
                        <div className='px-3'>
                            <Link to={`/${params.userId}/CompanyProfile`}><span>{profile.username}</span></Link> 
                        </div>
                    </div>
                    <div>
                        <Link to="/Login">
                            <button onClick={() => {handleLogOff()}}>
                                Sign Off
                            </button>
                        </Link>
                    </div>
                </div>
            );
        default : return <h3>UNSOPPORTED CONTEXT</h3>
    }
};

export default Navbar;

