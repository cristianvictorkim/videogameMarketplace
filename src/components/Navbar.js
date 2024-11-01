import React, { useState, useEffect, useContext } from 'react';
import logo from "../assets/logo.png";
import './Style/NavBar.css';
import React, { useState, useEffect, forceUpdate } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../components/UserContext';
import emptyFoto from '../assets/pfp.png'

const Navbar = () => {
    
    const [sticky, setSticky] = useState(false);
    const { username, profilePicture } = useContext(UserContext);

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

    return( 
        <div className={`navbar ${sticky ? 'sticky' : ''}`}>
            <div className="logoStyle">
                <Link to="/">
                    <img src={logo} className="imageStyle" alt="Logo"/>
                </Link>
            </div>
            <div className='flex items-center'>
                <Link to="/UserProfile">
                <img 
                    src={profilePicture}
                    alt={emptyFoto} 
                    className='w-11 h-11 rounded-full'
                />
                </Link>
                <div className='px-3'>
                    <Link to="/CompanyProfile"><span>{username}</span></Link> 
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

