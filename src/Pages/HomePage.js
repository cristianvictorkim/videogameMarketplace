import Categories from "../components/Categories";
import GameCard from "../components/GameCard";
import YourSelection from "../components/YourSelection";
import React from "react";
import { getSelection } from "../Entities/Game";

const HomePage = () => {    
    const [selection, setSelection] = React.useState([]);
    
    React.useEffect(() => { 
        getSelection()
        .then(data => setSelection(data));
    }, [])

    return( 
        <div>
            <Categories/>             
            <YourSelection/>
            {
                selection.map((game, index) => (
                    <GameCard
                        key={index}
                        gameId={game._id} 
                        image={game.bannerUrl}
                        title={game.title}
                        price={game.price}
                        score={game.rating}
                        publisherId={game.publisherId}
                    /> 
                ))
            }
        </div>
    );
};

export default HomePage;
