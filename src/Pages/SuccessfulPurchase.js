import React from 'react';
import RemovableGameCard from './RemovableGameCard';

const Wishlist = () => {
    return(
        <div className=' min-h-screen'>
            <div className='flex flex-col items-center justify-center'> 
                <div className='space-y-4'>
                    <h1 className='text-center text-2xl font-bold pt-5 '>
                        Wishlist
                    </h1>    
                    <input type="search"
                        placeholder='search for game...'
                        className='pl-5 rounded-full w-[100%]' 
                    />
                    <RemovableGameCard 
                    image="https://i.ytimg.com/vi/cklw-Yu3moE/maxresdefault.jpg"
                    title = "Ori and the Blind Forest" 
                    price={60.0}
                    score="4.8"
                    />
                    
                </div>
            </div>
        </div>
    );
};

export default Wishlist;