import React from 'react';

const UserLogIn = () => {
    return (
      <div className="gradient flex items-center justify-center min-h-screen pb-20">
        <form className="p-8 w-full max-w-sm bg-main-color border-2 border-black">
          <h2 className="text-2xl font-semibold mb-6 text-center">Log in</h2>
          <p className='pb-1'>Username</p>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
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
          <button
            type="submit"
            className="w-full p-2 border rounded-lg border-black bg-btn-color"
          >
            Log in
          </button>
          <div className='text-center py-4 space-y-1'> 
            <p>Forgot Password?</p>
            <p>Register</p>
            <p>I am a developer</p>
          </div>
        </form>
      </div>
    );
};

export default UserLogIn;
