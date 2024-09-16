import React from 'react';
import logo from "../assets/logo.png";
import pfp from "../assets/pfp.png";


const Navbar = () => {
    return( 
    <div className='bg-[#171a21] flex items-center justify-around py-2 text-white' >
        <div className='logo'>
            <img src={logo} alt='asd' className='w-12 h-12 rounded-full' />
        </div>
        <div className='home'>
            Home
        </div>
        <div className='flex items-center'>
            <img src={pfp} className='w-12 h-12 rounded-full'/>
            <div className='px-3'>
                User
            </div>
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