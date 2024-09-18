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
      image="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
      title="cool game"
      price={29.99} 
      score="2.5" 
    />      
    {/* Featured selection */}                    
    </div>;     
}
export default App;
