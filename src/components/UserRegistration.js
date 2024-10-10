import React from 'react';
import Navbar from "./Navbar";

const UserRegistration = () => {
    return (
    <div className="">
        <Navbar />
        <div className="gradient flex items-center justify-center min-h-screen">  
          <form className="p-8 w-full max-w-sm bg-main-color border-2 border-black max-w-[46rem]">
            <h2 className="text-2xl font-semibold mb-6 text-center">
                Registration
            </h2>
            <p className='pb-1'>Name</p>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <p className='pb-1'>Email Adress</p>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Password"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <p className='pb-1'>Password</p>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <p className='pb-1'>Date of birth</p>
            <div className="mb-6">
              <input
                type="date"
                placeholder="07/04/2004"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <p className='pb-1'>Secret Question</p>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Enter secret question"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <p className='pb-1'>Answer</p>
            <div className="mb-6">
              <input
                type="password"
                placeholder="..."
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 border rounded-lg border-black bg-btn-color"
            >
              Submit
            </button>
            <div className='text-center py-2 space-y-1'> 
              <p>Log in</p>
              <p>I am a developer</p>
            </div>
          </form>
        </div>
    </div>
    );
};

export default UserRegistration;