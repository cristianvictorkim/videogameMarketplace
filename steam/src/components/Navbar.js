import React from 'react';
import logo from "../assets/logo.png";
import pfp from "../assets/pfp.png";


const Navbar = () => {
    return( 
    <div className='bg-[#EAB2CE] flex items-center justify-around text-white py-1' >
        <div className='logo'>
            <img src={logo} alt='.' className='w-12 h-12 rounded-full' />
        </div>
        <div className='flex items-center'>
            <img src={pfp} alt="." className='w-11 h-11 rounded-full'/>
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