import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";

import HomePage         from './Pages/HomePage';
import UserLogIn        from './Pages/UserLogIn';
import Wishlist         from './Pages/Wishlist';
import UserRegistration from './Pages/UserRegistration';
import Cart             from './Pages/Cart';

function App() {
  return (
  <div className="">  
    <Navbar/>
    <main>
        <Routes>
          <Route path="/"             element={<HomePage />} />
          <Route path="/Cart"         element={<Cart />} />
          <Route path="/Login"        element={<UserLogIn />} />
          <Route path="/Wishlist"     element={<Wishlist />} />
          <Route path="/Register"     element={<UserRegistration />} />
        </Routes>
      </main>
  </div>
  );    
};

export default App;