import Categories from "../components/Categories";
import GameCard from "../components/GameCard";
import YourSelection from "../components/YourSelection";
import FeaturedSelection from "../components/FeaturedSelection";
import React from "react";
import { getGameById } from "../Entities/Game";

const HomePage = () => {    
    const [selection, setSelection] = React.useState([]);
    const [featured, setFeatured] = React.useState([]);
    
    React.useEffect(() => { 
        fetch("http://localhost:3001/games")
            .then(res => res.json())
            .then(data => setSelection(data));
            
        fetch("http://localhost:3001/games")
            .then(res => res.json())
            .then(data => setFeatured(data));
    }, [])

    return( 
        <div>
            <Categories/>
            <FeaturedSelection/>
            {
               featured.map((game, index) => (
                <GameCard
                    key={index}
                    image={game.bannerUrl}
                    title={game.title}
                    price={game.price}
                    score={game.rating}
                    gameId={game.gameId} 
                    publisherId={game.publisherId}
                /> 
            ))
            }
        </div>
    );
};

export default HomePage;