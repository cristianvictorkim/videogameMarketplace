import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import GameCard from "./components/GameCard";
import YourSelection from "./components/YourSelection";
import FeaturedSelection from "./components/FeaturedSelection";
import BottomScreen from "./components/BottomScreen";

function App() {
  return (
  <div className="">  
    <div className="gradient">
      <Navbar/>
      <Categories/>             
    {/* Esto esta hecho asi para poder testear el comportamiento de la game card */} 
      <YourSelection/>
      <GameCard
        image = "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/07/reserva-nba-2k25-all-star-edition-game-consigue-exclusiva-edicion-solo-ps5-3781943.jpg?tf=3840x"
        title="2k25"
        price={60.00} 
        score="2.5" 
      />
      <GameCard
        image = "https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2024/07/ea-sports-fc-25-key-art.jpg"
        title="FC2025"
        price={60.00}
        score="4.2"
      />
      <GameCard
        image= "https://media.contentapi.ea.com/content/dam/ea/nhl/nhl-24/common/nhl24-dlx-key-art-16x9.jpg.adapt.crop191x100.1200w.jpg"
        title="NHL 2024"
        price={60.00}
        score="4.1"
      />   
      <FeaturedSelection/>
      <GameCard
        image= "https://media.contentapi.ea.com/content/dam/ea/nhl/nhl-24/common/nhl24-dlx-key-art-16x9.jpg.adapt.crop191x100.1200w.jpg"
        title="NHL 2024"
        price={60.00}
        score="4.1"
      />               
      </div>
      <BottomScreen/>
    </div>
  );    
};
export default App;
