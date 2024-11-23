import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import placeholder from 'assets/Misc/placeholder-image.jpg';


const DeveloperGameCard = ({game}) => {
    
    const params = useParams();
    let [interaction, setInteraction] = useState({

        sales: 0,
        views: 0,
        wishlists: 0
    })

    useEffect(() => {

        let sales =  0;
        let views =  0;
        let wishlists =  0;

        if (game.userInteractions)
        {
            var fields = Object.keys(game.userInteractions);

            for(let i = 0; i < fields.length; i++)
            {
                let value = game.userInteractions[fields[i]];
                sales =  value.bought ? sales + 1 : sales;
                wishlists = value.wishlisted ? wishlists + 1 : wishlists;
                views = views + 1;
            }
        }
 
        setInteraction({
            sales: sales,
            wishlists: wishlists,
            views: views
        })
 
    }, [game])

    return (
        <div className="flex justify-center space-x-5">
            <div className="bg-main-color rounded-lg border-2 border-black w-[49rem]">
                <div className="h-[16rem] w-full flex">
                    <div className="w-[50%] h-full flex">
                        <img 
                            src={game.bannerUrl}
                            alt={placeholder}
                            className="object-cover w-full rounded-lg" 
                        />
                    </div>
                    <div className="w-[50%] relative">
                        <div className="flex flex-col p-4">
                            <div className='flex space-x-2'>    
                                <h2 className="text-lg font-bold text-[26px]">
                                    {game.title} 
                                </h2>
                                <p className='text-lg'>{game.genre}</p>
                            </div>
                            <span className="text-[16px]">
                                ${game.price}
                            </span>
                            <p>{game.description}</p>
                            <p>{game.releaseDate}</p>
                            
                        </div>
                        <div className="absolute bottom-4 inset-x-0 flex justify-center space-x-2">
                        <Link 
                            to={{
                                pathname: `/${params.userId}/EditGame/${game.title}/${game._id}`,
                                state: {game} 
                            }}
                        >
                            <p>Edit</p>
                        </Link>
                            <p>Hide</p>
                            <button onClick={console.log("ajaj")}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-main-color h-[16rem] p-4 rounded-lg border-2 border-black">
                <h1 className="font-bold">
                    Stats for nerds
                </h1>
                <div className="h-full flex flex-col space-y-2">
                    <p>Views: {interaction.views}</p>
                    <p>Sales: {interaction.sales}</p>
                    <p>Wishlisted: {interaction.wishlists}</p>
                    <p>Views Confirmation Rate: { interaction.sales / interaction.views }</p>
                </div>
            </div>
        </div>
    );
};

export default DeveloperGameCard;
