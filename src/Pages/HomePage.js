import Categories from "../components/Categories";
import GameCard from "../components/GameCard";
import YourSelection from "../components/YourSelection";
import FeaturedSelection from "../components/FeaturedSelection";
import BottomScreen from "../components/BottomScreen";
import { useState } from 'react';

const HomePage = () => {
    
    const [gameCards] = useState([]);
    
    const jsonData = `
    [
    {
        "url" : "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/07/reserva-nba-2k25-all-star-edition-game-consigue-exclusiva-edicion-solo-ps5-3781943.jpg?tf=3840x",
        "title": "2k25",
        "rating": 2.5,
        "price": 60
    },
    {
        "url" : "https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2024/07/ea-sports-fc-25-key-art.jpg",
        "title": "EAFC25",
        "rating": 4.2,
        "price": 70
    },
    {
        "url": "https://media.contentapi.ea.com/content/dam/ea/nhl/nhl-24/common/nhl24-dlx-key-art-16x9.jpg.adapt.crop191x100.1200w.jpg",
        "title": "NHL 2024",
        "rating": 4.1,
        "price": 45
    }
    ]`;

    const games = JSON.parse(jsonData);

    return( 
        <div className="gradient">
                <Categories/>             
                <YourSelection/>
                {
                    games.map((game, index) => (
                        <GameCard
                            key={index}
                            image={game.url}
                            title={game.title}
                            price={game.price}
                            score={game.rating} 
                        /> 
                    ))
                }
                <FeaturedSelection/>
                <GameCard
                    image="https://media.contentapi.ea.com/content/dam/ea/nhl/nhl-24/common/nhl24-dlx-key-art-16x9.jpg.adapt.crop191x100.1200w.jpg"
                    title="NHL 2024"
                    price={60.00}
                    score="4.1"
                />
                <div className="pt-5">
                <BottomScreen/>
                </div>   
        </div>                 
    );
};

export default HomePage;