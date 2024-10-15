import React from 'react';
import Navbar from "./Navbar";

const Error404 = () => {
    return(
        <div className="min-h-screen flex flex-col gradient">
            <Navbar/>
            <div className="flex flex-col items-center justify-center max-w-md mx-auto my-40 py-16 px-16 bg-main-color">
                <div className=''>    
                    <h1 className='font-bold text-3xl mb-4 text-center'>
                        Página no encontrada
                    </h1>
                </div>
                <p className='text-lg mb-6'>
                    Error 404
                </p>
                <button
                    type="button"
                    className="px-4 py-2 border rounded-lg border-black bg-btn-color"
                >
                    Home
                </button>  
            </div>
        </div>
    );
};

export default Error404;
