import './Style/NavBar.css';
import React, { useState, useEffect, forceUpdate } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { getPfp, pfp } from "../Entities/User";

const Navbar = () => {
    
    const [sticky, setSticky] = useState(false);
    const [profilePictureUrl, setProfilePictureUrl] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {setProfilePictureUrl(pfp)}, [pfp])

    return( 
        <div className={`navbar ${sticky ? 'sticky' : ''}`}>
            <div className="logoStyle">
                <Link to="/">
                    <img src={logo} className="imageStyle" alt="Logo"/>
                </Link>
            </div>
            <div className='flex items-center'>
                <img 
                    src={profilePictureUrl}
                    alt="Profile" 
                    className='w-11 h-11 rounded-full'
                />
                <div className='px-3'>
                    <Link to="/UserProfile">User</Link>
                </div>
            </div>
            <div>
                <Link to="/Wishlist">Wishlist</Link>
            </div>
            <div>
                <Link to="/Cart">Cart</Link>
            </div>
            <div>
                <Link to="/Login">Sign Off</Link>
            </div>
        </div>
    );
};

export default Navbar;

