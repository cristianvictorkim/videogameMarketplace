import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from './Layouts/MainLayout';

import AuthRequired from './Pages/Common/AuthRequired';
import Cart from './Pages/Gamer/Cart';
import CompanyLogin from './Pages/Developer/CompanyLogin';
import CompanyProfile from './Pages/Developer/CompanyProfile';
import CompanyRegistration from './Pages/Developer/CompanyRegistration';
import EditGame from './Pages/Developer/EditGame';
import GameDetails from './Pages/Gamer/GameDetails';
import HomePage from './Pages/Gamer/HomePage';
import SuccessfulPurchase from './Pages/Gamer/SuccessfulPurchase';
import UserLogIn from './Pages/Gamer/UserLogIn';
import UserProfile from './Pages/Gamer/UserProfile';
import UserRegistration from './Pages/Gamer/UserRegistration';
import Wishlist from './Pages/Gamer/Wishlist';
import CreateGame from './Pages/Developer/CreateGame';
import { UserProvider } from './components/Common/UserContext';
import ForgotPassword from 'Pages/Common/ForgotPassword';

function App() {
    return (
        <UserProvider>
            <div>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index                       element={<UserLogIn />} />
                        <Route path="Login"                element={<UserLogIn />} />
                        <Route path="CompanyLogin"         element={<CompanyLogin />} />
                        <Route path="Register"             element={<UserRegistration />} />
                        <Route path="CompanyRegistration"  element={<CompanyRegistration />} />
                        <Route path="CompanyLogIn"         element={<CompanyLogin />} />
                        <Route path="UserRegistration"     element={<UserRegistration/>} />
                        <Route path="ForgotPassword"       element={<ForgotPassword/>} />
                        <Route path='/:userId'             element={<AuthRequired />}>
                            <Route index                                      element={<HomePage />} />
                            <Route path="CompanyProfile"                      element={<CompanyProfile />} />
                            <Route path="UserProfile"                         element={<UserProfile />} />
                            <Route path="GameDetails/:publisherId/:gameId"    element={<GameDetails />} />
                            <Route path="Wishlist"                            element={<Wishlist />} />
                            <Route path="Cart"                                element={<Cart />} />
                            <Route path="SuccessfulPurchase"                  element={<SuccessfulPurchase />} />
                            <Route path="EditGame/:gameTitle/:gameId"         element={<EditGame />} />
                            <Route path="CreateGame"                          element={<CreateGame/>} />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </UserProvider>
    );
}

export default App;
