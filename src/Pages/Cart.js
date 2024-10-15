import React from 'react';
import Navbar from '../components/Navbar';
import RemovableGameCard from '../components/RemovableGameCard';

const Cart = () => {
    return(
        <div className=' min-h-screen gradient'>
            <Navbar/>
            <div className='flex flex-col items-center justify-center'> 
                <div className='space-y-4'>
                    <h1 className='text-center text-2xl font-bold pt-5 '>Cart</h1>    
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
                <div className='my-5 bg-main-color p-4 flex flex-col items-center justify-center border-2 border-black'>
                    <p>
                        Total estimated to pay $60.0
                    </p>
                    <button className='bg-btn-color my-1 w-[40%] border border-black'>
                        Pay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;