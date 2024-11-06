import React, { useContext } from 'react';
import logo from "assets/Misc/logo.png";
import { Link, useParams } from 'react-router-dom';
import emptyFoto from 'assets/User/pfp.png'
import { logOff } from 'Entities/User'
import { UserContext } from './UserContext';

const Navbar = () => {
    
    const { profile, setProfile, sCLIENT, sDEVELOPER } = useContext(UserContext);
    const params = useParams();
    const profilePicture = profile.profilePicture || emptyFoto;

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
                        <Link to={`/${params.userId}/CompanyProfile`}>
                        <img 
                            src={profilePicture} 
                            alt={emptyFoto} 
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
                            <button onClick={() => {logOff()}}>
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
                            alt={emptyFoto} 
                            className='w-11 h-11 rounded-full'
                        />
                        </Link>
                        <div className='px-3'>
                            <Link to={`/${params.userId}/CompanyProfile`}><span>{profile.username}</span></Link> 
                        </div>
                    </div>
                    <div>
                        <Link to="/Login">
                            <button onClick={() => {logOff()}}>
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

