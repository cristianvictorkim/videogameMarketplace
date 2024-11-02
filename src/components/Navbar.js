import React, { useState, useContext } from 'react';
import logo from "../assets/logo.png";
import './Style/NavBar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../components/UserContext';
import emptyFoto from '../assets/pfp.png'
import { logOff } from '../Entities/User'

const Navbar = () => {
    
    const [sticky, setSticky] = useState(false);
    const { username, profilePicture } = useContext(UserContext);

    return( 
        <div className={`navbar ${sticky ? 'sticky' : ''}`}>
            <div className="logoStyle">
                <Link to="/Host">
                    <img src={logo} className="imageStyle" alt="Logo"/>
                </Link>
            </div>
            <div className='flex items-center'>
                <Link to="/Host/UserProfile">
                <img 
                    src={profilePicture}
                    alt={emptyFoto} 
                    className='w-11 h-11 rounded-full'
                />
                </Link>
                <div className='px-3'>
                    <Link to="/Host/CompanyProfile"><span>{username}</span></Link> 
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
};

export default Navbar;

