import React from 'react';
import Navbar from "./Navbar";

const ForgotPassword = () => {
    return (
    <div className="">
        <Navbar/>
        <div className="gradient flex items-center justify-center min-h-screen pb-20">
          <form className="p-8 w-full max-w-sm bg-main-color border-2 border-black">
            <h2 className="text-2xl font-semibold mb-6 text-center">Forgot password?</h2>
            <p className='pb-1'>Enter email address</p>
            <div className="mb-4">
              <input
                type="text"
                placeholder="email"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <p className='pb-1'>Enter secret question</p>
            <div className="mb-6">
              <input
                type="text"
                placeholder="..."
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <p className='pb-1'>Answer</p>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Answer"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 border rounded-lg border-black bg-btn-color"
            >
              Send email
            </button>
          </form>
        </div>
    </div>
    );
};

export default ForgotPassword;