import React from 'react';
import logo from "../assets/logo.png";
import pfp from "../assets/pfp.png";
import './Style/NavBar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    
    const [sticky, setSticky] = useState(false);

    // Add event listener for scroll to make navbar sticky
    useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {  // When scrolled beyond 100px
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

    const imageStyle = {
        mixBlendMode: "color-burn",
        maxWidth: "150px",
        height: "170px",
        clipPath: "ellipse(50% 25% at center)"
    }

    const logoStyle = 
    {
        height: "40px",
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }

    return( 
    <div className={`navbar ${sticky ? 'sticky' : ''}`} >
        <div style={logoStyle}>
            <Link to="/">
                <img src={logo} style={imageStyle}/>
            </Link>
        </div>
        <div className='flex items-center'>
            <img src={pfp} alt="." className='w-11 h-11 rounded-full'/>
            <div className='px-3'>
                User
            </div>
        </div>
        <div>
            <Link to="/Wishlist">Wishlist</Link>
        </div>
        <div >
            <Link to="/Cart">Cart</Link>
        </div>
        <div>
            <Link to="/Login">Sing Off</Link>
        </div>
    </div>
    );
};

export default Navbar;