import React, { useContext } from 'react';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import emptyFoto from '../../assets/pfp.png'
import { logOff } from '../../Entities/User'
import { UserContext } from './UserContext';

const Navbar = () => {
    
    const { profile, getProfile, sCLIENT, sDEVELOPER } = useContext(UserContext);

    switch(profile.type)
    {      
        case sCLIENT: 
            return( 
                <div className={`navbar`}>
                    <div className="logoStyle">
                        <Link to="/Host">
                            <img src={logo} className="imageStyle" alt="Logo"/>
                        </Link>
                    </div>    
                    <div>
                        <Link to="/Host">Home</Link>
                    </div>
                    <div className='flex items-center'>
                        <Link to="/Host/UserProfile">
                        <img 
                            src={profile.profilePicture}
                            alt={emptyFoto} 
                            className='w-11 h-11 rounded-full'
                        />
                        </Link>
                        <div className='px-3'>
                            <Link to="/Host/CompanyProfile"><span>{profile.username}</span></Link> 
                        </div>
                    </div>
                    <div>
                        <Link to="/Host/Wishlist">Wishlist</Link>
                    </div>
                    <div>
                        <Link to="/Host/Cart">Cart</Link>
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
                        <Link to="/Host">
                            <img src={logo} className="imageStyle" alt="Logo"/>
                        </Link>
                    </div>    
                    <div>
                        <Link to="/Host">Home</Link>
                    </div>
                    <div className='flex items-center'>
                        <Link to="/Host/UserProfile">
                        <img 
                            src={profile.profilePicture}
                            alt={emptyFoto} 
                            className='w-11 h-11 rounded-full'
                        />
                        </Link>
                        <div className='px-3'>
                            <Link to="/Host/CompanyProfile"><span>{profile.username}</span></Link> 
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

