import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from './Layouts/MainLayout';

import AuthRequired from './Pages/AuthRequired';
import Cart from './Pages/Cart';
import CompanyLogin from './Pages/CompanyLogin';
import CompanyProfile from './Pages/CompanyProfile';
import CompanyRegistration from './Pages/CompanyRegistration';
import EditGame from './Pages/EditGame';
import GameDetails from './Pages/GameDetails';
import HomePage from './Pages/HomePage';
import SearchedGames from './Pages/SearchedGames';
import SuccessfulPurchase from './Pages/SuccessfulPurchase';
import UserLogIn from './Pages/UserLogIn';
import UserProfile from './Pages/UserProfile';
import UserRegistration from './Pages/UserRegistration';
import Wishlist from './Pages/Wishlist';

import Navbar from './components/Navbar';
import { UserProvider } from './components/UserContext';

function App() {
    return (
        <UserProvider>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index                       element={<UserLogIn />} />
                        <Route path="Login"                element={<UserLogIn />} />
                        <Route path="CompanyLogin"         element={<CompanyLogin />} />
                        <Route path="Register"             element={<UserRegistration />} />
                        <Route path="CompanyRegistration"  element={<CompanyRegistration />} />
                        <Route path="CompanyLogIn"         element={<CompanyLogin />} />
                        <Route path="Host"                 element={<AuthRequired />}>
                            <Route index                       element={<HomePage />} />
                            <Route path="CompanyProfile"       element={<CompanyProfile />} />
                            <Route path="UserProfile"          element={<UserProfile />} />
                            <Route path="GameDetails"          element={<GameDetails />} />
                            <Route path="Wishlist"             element={<Wishlist />} />
                            <Route path="Cart"                 element={<Cart />} />
                            <Route path="SearchedGames"        element={<SearchedGames />} />
                            <Route path="SuccessfulPurchase"   element={<SuccessfulPurchase />} />
                            <Route path="EditGame"             element={<EditGame />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </UserProvider>
    );
}

export default App;
