import Categories from "../components/Categories";
import GameCard from "../components/GameCard";
import YourSelection from "../components/YourSelection";
import FeaturedSelection from "../components/FeaturedSelection";
import { getGameById, getGames } from "../Entities/Game";
import React from "react";

const HomePage = () => {    
    const [selection, setSelection] = React.useState([]);
    const [featured, setFeatured] = React.useState({});
    
    React.useEffect(() => { 
        setSelection(getGames()); 
        setFeatured(getGameById(2))
    })

    return( 
        <div>
                <Categories/>             
                <YourSelection/>
                {
                    selection.map((game, index) => (
                        <GameCard
                            key={index}
                            image={game.bannerUrl}
                            title={game.title}
                            price={game.price}
                            score={game.rating}
                            gameId={game.gameId} 
                        /> 
                    ))
                }
                <FeaturedSelection/>
                {
                    <GameCard
                        image={featured.bannerUrl}
                        title={featured.title}
                        price={featured.price}
                        score={featured.rating}
                        gameId={featured.gameId} 
                    /> 
                }
        </div>
    );
};

export default HomePage;