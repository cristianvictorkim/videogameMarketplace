import React from 'react';
import { Link } from 'react-router-dom';

const DeveloperRegistration = () => {
    return (
    <div className="">
        <div className="flex items-center justify-center min-h-screen">  
          <form className="p-5 w-full max-w-sm">
            <h2 className="text-2xl font-semibold mb-6 text-center">
                Registration form
            </h2>
            <p className='pb-1'>Company Name</p>
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
            <p className='pb-1'>Company Logo</p>
            <div className="mb-6">
                <input
                  type="file"
                  placeholder="Logo"
                  className="w-full p-2 border rounded-lg"
                />
            </div>
            <p className='pb-1'>Description</p>
            <div className="mb-6">
                <input
                  type="text"
                  placeholder="Description"
                  className="w-full p-2 h-[6rem] border rounded-lg"
                />
            </div>
            <div className='flex space-x-3'>
              <button
                type="submit"
                className="p-2 border rounded-lg border-black bg-btn-color"
              >
                Register
              </button>
              <Link to='/CompanyLogIn'>
                <button
                  type="submit"
                  className="p-2 border rounded-lg border-black bg-btn-color"
                >
                  Back to Log In
                </button>
              </Link>  
            </div>
            
          </form>
        </div>
    </div>
    );
};

export default DeveloperRegistration;