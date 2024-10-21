import { Routes, Route } from 'react-router-dom';

import HomePage         from './Pages/HomePage';
import UserLogIn        from './Pages/UserLogIn';
import Wishlist         from './Pages/Wishlist';
import UserRegistration from './Pages/UserRegistration';
import Cart             from './Pages/Cart';
import GameDetails      from './Pages/GameDetails';
import CompanyLogin     from './Pages/CompanyLogin';
import MainLayout       from './Layouts/MainLayout';
import SearchedGames from './Pages/SearchedGames';

function App() {

  return (
  <div className="">    
        <Routes>
          <Route path="/"                       element={<MainLayout />}>
            <Route index                        element={<HomePage />} />
            <Route path="/Cart"                 element={<Cart />} />
            <Route path="/Login"                element={<UserLogIn />} />
            <Route path="/CompanyLogin"         element={<CompanyLogin />} />
            <Route path="/Wishlist"             element={<Wishlist />} />
            <Route path="/Register"             element={<UserRegistration />} />
            <Route path="/GameDetails/:gameId"  element={<GameDetails />} />
            <Route path="/SearchedGames"        element={<SearchedGames />} />
          </Route>
        </Routes>
  </div>
  );    
};

export default App;