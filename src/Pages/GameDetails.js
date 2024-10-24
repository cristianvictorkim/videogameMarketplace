import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Comment from '../components/Comment';
import AddComment from '../components/AddComment';
import Footer from '../components/Footer';
import { addGame, getGameById } from '../Entities/Game'
import { getUserId } from '../Entities/User';

const GameDetails = () => {

    const params = useParams();
    let gameId = params["gameId"];

    const [game, setGame] = React.useState({
        bannerUrl: "",
        gameplayUrl: "",
        title: "Loading..",
        genre: "Loading..",
        rating: 5,
        price: 0,
        gameId: -1 
    });

    React.useEffect(() => {
        fetch("http://localhost:3001/get-game-by-id?"  + new URLSearchParams({
                gameId: gameId
                }).toString()
            ).then(res => res.json())
            .then(data => setGame(data));
    }, []);

    function addToCart()
    {
        let user = getUserId();

        fetch("http://localhost:3001/add-to-cart?"  + new URLSearchParams({
            gameId: gameId,
            userId: user,
            }.toString())
        );
    }
    
    return(
        <div className='min-h-screen flex flex-col justify-center items-center space-y-6 pb-10'> 
            <div className='flex space-x-8 h-[20rem] mt-10 max-w-[59rem]'>
                <div className='h-full flex'>
                    <img 
                        src={game.gameplayUrl}
                        alt="asd"
                        className="object-cover w-full rounded"
                    />
                </div>
                <div className='bg-main-color px-4 h-full rounded flex flex-col justify-between'>
                    <div>
                        <div className='flex space-x-3 mb-2 mt-1'>    
                            <h2 className='text-lg font-bold'>
                                {game.title}
                            </h2>
                            <p className='text-lg'>
                                {game.genre}
                            </p>
                        </div>
                        <img 
                            src={game.bannerUrl}
                            alt="asd"
                            className="max-w-xs max-h-xs"
                        />
                        <div className='mt-2'>
                            <p className='font-bold'>
                                {"Price : $" + game.price}
                            </p>
                            <p className='font-bold'>
                                {"Score : " + game.rating}
                            </p>
                        </div>
                    </div>
                    <div className='flex space-x-2 pb-3'>    
                        <button className='btn'>
                            Add to Wishlist
                        </button>
                        <Link to="/Cart">
                            <button className='btn' onClick={addToCart}>
                                Buy now
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
            <div className='w-[59rem]'>
                <h1 className='font-bold pb-1'>
                    Publisher
                </h1>
                <div className='bg-main-color flex border-black p-4 rounded-lg'>
                    <img 
                        src='https://upload.wikimedia.org/wikipedia/commons/1/1f/2K_2021_Logo.svg'
                        className='profilePic p-4'
                    />
                    <div className='ml-4'>    
                        <h1 className='font-bold'>
                            Publisher Name
                        </h1>
                        <p>
                            Publisher Description
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-[59rem]'>
                <h1 className='font-bold pb-1'>
                    Game Description
                </h1>
                <div className='bg-main-color flex border-black p-4 rounded-lg'>   
                    <p className=''>
                        Game Description
                    </p>
                </div>
            </div>
            <div className='w-[59rem]'>
                <h1 className='font-bold pb-1'>
                    System Requirements
                </h1>
                <div className='bg-main-color border-black p-4 rounded-lg flex justify-between'>   
                    <div className='w-1/2 text-center'>
                        <h2 className='font-semibold'>
                            Minimum Requirements
                        </h2>
                        <p>
                            Details about minimum system requirements.
                        </p>
                    </div>
                    <div className='w-1/2 text-center'>
                        <h2 className='font-semibold'>
                            Recommended Requirements
                        </h2>
                        <p>
                            Details about recommended system requirements.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='w-[59rem]'>
                <Comment/>
            </div>
            <div className='w-[59rem]'>
                <AddComment/>
            </div>
            <Footer/>
        </div>
    );
};

export default GameDetails;
