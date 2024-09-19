import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import GameCard from "./components/GameCard";
import YourSelection from "./components/YourSelection";

function App() {
  return <div className="gradient h-screen">
    {/* Navbar */}
    <Navbar/>
    {/* Categories */}
    <Categories/>             
    {/* Your selection */}
    <YourSelection/>
    <GameCard
      image = "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/07/reserva-nba-2k25-all-star-edition-game-consigue-exclusiva-edicion-solo-ps5-3781943.jpg?tf=3840x"
      title="2k25"
      price={60.00} 
      score="2.5" 
    />      
    {/* Featured selection */}                    
    </div>;     
}
export default App;
