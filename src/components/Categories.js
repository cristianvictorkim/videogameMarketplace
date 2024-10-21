import React, { useState, useEffect } from 'react';
import { getGames } from "../Entities/Game";
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const [games, setGames] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        const allGames = await getGames();
        setGames(allGames);
    };

    const searchGame = (name) => {
        const searchResults = games.filter((game) =>
            game.title.toLowerCase().includes(name.toLowerCase())
        );
        return searchResults;
    };


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const searchResults = searchGame(searchQuery);
            console.log(searchResults);
            navigate('/SearchedGames', { state: { games: searchResults } });
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="my-4 mx-auto bg-white w-full max-w-2xl flex items-center justify-around rounded-full">
            <ul className='flex items-center justify-center space-x-4'>
                <li>
                    <p>Categorías</p>
                </li>
                <li>
                    <p>Precio</p>
                </li>
                <li>
                    <p>OS</p>
                </li>
                <li>
                    <p>Idioma</p>
                </li>
                <li>
                    <p>Jugadores</p>
                </li>
                <li>
                    <p>Calificación</p>
                </li>
            </ul>
            <input
                type="text"
                placeholder="search for game..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                className="pl-5 rounded-full"
            />
        </div>
    );
};

export default Categories;