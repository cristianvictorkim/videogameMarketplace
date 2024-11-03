import React from "react";

import Categories from "components/Common/Categories";
import GameCard from "components/Common/GameCard";
import YourSelection from "components/Common/YourSelection";

import { getSelection } from "Entities/Game";

const HomePage = () => {    
    const [selection, setSelection] = React.useState([]);
    
    React.useEffect(() => { 
        getSelection()
        .then(data => setSelection(data));
    }, [])

    return( 
        <div className="min-h-screen">
            <Categories games={selection} setGames={setSelection} />             
            <YourSelection/>
            {
                selection.length > 0 ?
                (
                    selection.map((game, index) => (
                    <GameCard
                        key={index}
                        gameId={game._id} 
                        image={game.bannerUrl}
                        title={game.title}
                        price={game.price}
                        score={game.score}
                        publisherId={game.publisherId}
                    /> 
                ))
                ) : (
                    <h3> No games found </h3>
                )
            }
        </div>
    );
};

export default HomePage;
