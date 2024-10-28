import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { getPfp } from "../Entities/User";
import './Style/NavBar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    const [sticky, setSticky] = useState(false);
    const [profilePicture, setProfilePicture] = useState('');

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

    useEffect(() => {
        const fetchProfilePicture = () => {
            const pfpUrl = getPfp();
            setProfilePicture(pfpUrl); 
        };

        fetchProfilePicture();
    }, []);

    return( 
        <div className={`navbar ${sticky ? 'sticky' : ''}`}>
            <div className="logoStyle">
                <Link to="/">
                    <img src={logo} className="imageStyle" alt="Logo"/>
                </Link>
            </div>
            <div className='flex items-center'>
                <img 
                    src={profilePicture}
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

