import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Comment from '../../components/GameDetails/Comment';
import AddComment from '../../components/GameDetails/AddComment';
import Footer from '../../components/Common/Footer';
import { getGameById } from '../../Entities/Game'
import { getUserId } from '../../Entities/User';
import { addGameToCart } from '../../Entities/Cart';
import { addGameToWishlist } from '../../Entities/Wishlist';
import { getPublisherById } from '../../Entities/Publisher';

const GameDetails = () => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [game, setGame] = React.useState({});
    const [publisher, setPublisherData] = React.useState({});
    const [searchParams, setSearchParams] = useSearchParams();

    let gameId = searchParams.get("gameId");
    let publisherId  = searchParams.get("publisherId");

    React.useEffect(() => {      
        getGameById(gameId)
            .then(data => {
                setIsLoading(false);
                setGame(data)
            });
        
        getPublisherById(publisherId)
            .then(data => {
                console.log(data)
                setPublisherData(data);
            });
    }, []);
    
    if(isLoading)
    {
        return(
            <div>Loading....</div>
        )
    }
    else
    {
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
                                    {"Score : " + game.score}
                                </p>
                            </div>
                        </div>
                        <div className='flex space-x-2 pb-3'>    
                            <Link to="/Host/Wishlist">
                                <button className='btn' onClick={() => addGameToWishlist(getUserId(), gameId)}>
                                    Add to Wishlist
                                </button>
                            </Link>
                            <Link to="/Host/Cart">
                                <button className='btn' onClick={() => addGameToCart(getUserId(), gameId)}>
                                    Add to Cart
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
                            src={publisher.profilePicUrl}
                            className='profilePic p-4'
                        />
                        <div className='ml-4'>    
                            <h1 className='font-bold'>
                                {publisher.title}
                            </h1>
                            <p>
                                {publisher.description}
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
                            {game.description}
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
    }
};

export default GameDetails;
