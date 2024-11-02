import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import UserLogIn from './Pages/UserLogIn';
import Wishlist from './Pages/Wishlist';
import UserRegistration from './Pages/UserRegistration';
import Cart from './Pages/Cart';
import GameDetails from './Pages/GameDetails';
import CompanyLogin from './Pages/CompanyLogin';
import MainLayout from './Layouts/MainLayout';
import SearchedGames from './Pages/SearchedGames';
import UserProfile from './Pages/UserProfile';
import Navbar from './components/Navbar';
import SuccessfulPurchase from './Pages/SuccessfulPurchase';
import CompanyRegistration from './Pages/CompanyRegistration';
import { UserProvider } from './components/UserContext';
import CompanyProfile from './Pages/CompanyProfile';
import EditGame from './Pages/EditGame';

function App() {
    return (
        <UserProvider>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index                        element={<HomePage />} />
                        <Route path="/Cart"                 element={<Cart />} />
                        <Route path="/Login"                element={<UserLogIn />} />
                        <Route path="/CompanyLogin"         element={<CompanyLogin />} />
                        <Route path="/Wishlist"             element={<Wishlist />} />
                        <Route path="/Register"             element={<UserRegistration />} />
                        <Route path="/GameDetails"          element={<GameDetails />} />
                        <Route path="/SearchedGames"        element={<SearchedGames />} />
                        <Route path="/UserProfile"          element={<UserProfile />} />
                        <Route path="/SuccessfulPurchase"   element={<SuccessfulPurchase />} />
                        <Route path="/UserRegistration"     element={<UserRegistration />} />
                        <Route path="/CompanyLogIn"         element={<CompanyLogin />} />
                        <Route path="/CompanyRegistration"  element={<CompanyRegistration />} />
                        <Route path="/CompanyProfile"       element={<CompanyProfile />} />
                        <Route path="/EditGame"             element={<EditGame />} />
                    </Route>
                </Routes>
            </div>
        </UserProvider>
    );
}

export default App;
