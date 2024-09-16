import React from 'react';
import logo from "../assets/logo.png";
import pfp from "../assets/pfp.png";


const Navbar = () => {
    return( 
    <div className='bg-[#171a21] flex items-center justify-around ' >
        <div className='logo'>
            <img src={logo} alt='asd' className='w-20 h-20' />
        </div>
        <div className='home'>
            Home
        </div>
        <div className='flex items-center'>
            <img src={pfp} className='w-20 h-20'/>
            User
        </div>
        <div className='wishlist'>
            Wishlist
        </div>
        <div className='cart'>
            Cart
        </div>
        <div className='logoff'>
            LogOff
        </div>

    </div>
    );
};

export default Navbar;