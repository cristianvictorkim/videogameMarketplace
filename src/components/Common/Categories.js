import React, { useState } from 'react';
import { getGamesFiltered } from "Entities/Game";

const Categories = ({ games, setGames }) => {
    const [filters, setFilters] = useState({
        category: "", 
        price: "",
        os: "",
        language: "",
        playerCount: "",
        rating: "",
        title: ""
    });

    function clearFilters() {
        setFilters({
            category: "", 
            price: "",
            os: "",
            language: "",
            playerCount: "",
            rating: "",
            title: ""
        });
    }

    const [showDropdown, setShowDropdown] = useState({
        category: false,
        price: false,
        os: false,
        language: false,
        playerCount: false,
        rating: false,
        title: false
    });

    async function handleSubmit(e) {
        e.preventDefault();
        let filteredGames = await getGamesFiltered(filters);
        setGames(filteredGames);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFilters((previousValue) => ({
            ...previousValue,
            [name]: value 
        }));
    }

    function toggleDropdown(field) {
        setShowDropdown((previous) => ({
            ...previous,
            [field]: !previous[field]
        }));
    }

    function handleOptionClick(field, value) {
        setFilters((previousValue) => ({
            ...previousValue,
            [field]: value 
        }));
        setShowDropdown((previous) => ({
            ...previous,
            [field]: false
        }));
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-around rounded-full">
            <ul className='listStyle'>
                <li className='elementStyle'>
                    <div onClick={() => toggleDropdown("category")} className="pl-5 cursor-pointer">
                        Category {filters.category && <span>({filters.category})</span>}
                    </div>
                    {showDropdown.category && (
                        <ul className="dropdown-menu">
                            <li onClick={() => handleOptionClick("category", "Action")}>Action</li>
                            <li onClick={() => handleOptionClick("category", "Adventure")}>Adventure</li>
                            <li onClick={() => handleOptionClick("category", "Strategy")}>Strategy</li>
                            <li onClick={() => handleOptionClick("category", "RPG")}>RPG</li>
                            <li onClick={() => handleOptionClick("category", "Sports")}>Sports</li>
                            <li onClick={() => handleOptionClick("category", "Simulation")}>Simulation</li>
                            <li onClick={() => handleOptionClick("category", "Open World")}>Open World</li>
                        </ul>
                    )}
                </li>
    
                <li className='elementStyle'>
                    <div onClick={() => toggleDropdown("price")} className="pl-5 cursor-pointer">
                        Price Range {filters.price && <span>({filters.price})</span>}
                    </div>
                    {showDropdown.price && (
                        <ul className="dropdown-menu">
                            <li onClick={() => handleOptionClick("price", "Free")}>Free</li>
                            <li onClick={() => handleOptionClick("price", "Under $10")}>Under $10</li>
                            <li onClick={() => handleOptionClick("price", "$10-$50")}>$10-$50</li>
                            <li onClick={() => handleOptionClick("price", "Above $50")}>Above $50</li>
                        </ul>
                    )}
                </li>
    
                <li className='elementStyle'>
                    <div onClick={() => toggleDropdown("os")} className="pl-5 cursor-pointer">
                        Operating System {filters.os && <span>({filters.os})</span>}
                    </div>
                    {showDropdown.os && (
                        <ul className="dropdown-menu">
                            <li onClick={() => handleOptionClick("os", "Windows")}>Windows</li>
                            <li onClick={() => handleOptionClick("os", "MacOS")}>MacOS</li>
                            <li onClick={() => handleOptionClick("os", "Linux")}>Linux</li>
                        </ul>
                    )}
                </li>
    
                <li className='elementStyle'>
                    <div onClick={() => toggleDropdown("language")} className="pl-5 cursor-pointer">
                        Language {filters.language && <span>({filters.language})</span>}
                    </div>
                    {showDropdown.language && (
                        <ul className="dropdown-menu">
                            <li onClick={() => handleOptionClick("language", "English")}>English</li>
                            <li onClick={() => handleOptionClick("language", "Spanish")}>Spanish</li>
                            <li onClick={() => handleOptionClick("language", "French")}>French</li>
                        </ul>
                    )}
                </li>
    
                <li className='elementStyle'>
                    <div onClick={() => toggleDropdown("playerCount")} className="pl-5 cursor-pointer">
                        Player Count {filters.playerCount && <span>({filters.playerCount})</span>}
                    </div>
                    {showDropdown.playerCount && (
                        <ul className="dropdown-menu">
                            <li onClick={() => handleOptionClick("playerCount", "Single Player")}>Single Player</li>
                            <li onClick={() => handleOptionClick("playerCount", "Multiplayer")}>Multiplayer</li>
                            <li onClick={() => handleOptionClick("playerCount", "Co-op")}>Co-op</li>
                        </ul>
                    )}
                </li>
    
                <li className='elementStyle'>
                    <div onClick={() => toggleDropdown("rating")} className="pl-5 cursor-pointer">
                        Rating {filters.rating && <span>({filters.rating})</span>}
                    </div>
                    {showDropdown.rating && (
                        <ul className="dropdown-menu">
                            <li onClick={() => handleOptionClick("rating", "1 Star")}>1 Star</li>
                            <li onClick={() => handleOptionClick("rating", "2 Stars")}>2 Stars</li>
                            <li onClick={() => handleOptionClick("rating", "3 Stars")}>3 Stars</li>
                            <li onClick={() => handleOptionClick("rating", "4 Stars")}>4 Stars</li>
                            <li onClick={() => handleOptionClick("rating", "5 Stars")}>5 Stars</li>
                        </ul>
                    )}
                </li>
    
                <li className='elementStyle'>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={filters.title}
                        onChange={handleChange}
                        className="pl-5 rounded-full"
                    />
                </li>
                <button type="submit" className="btn elementStyle">
                    Search
                </button>
                <button type="button" className="btn elementStyle" onClick={clearFilters}>
                    Clear Filters
                </button>
            </ul>
        </form>
    );
    
};

export default Categories;
