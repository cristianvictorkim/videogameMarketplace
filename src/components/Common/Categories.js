import React, { useState, useEffect } from 'react';
import { getGames, getGamesFiltered } from "Entities/Game";
import { useNavigate } from 'react-router-dom';

const Categories = ({ games, setGames }) => {

    const [filters, setFilters] = useState({
        category: "", 
        price: "",
        os: "",
        language: "",
        playerCount: "",
        rating: "",
        title: ""
    })

    async function handleSubmit(e)
    {
        e.preventDefault();
        let filteredGames = await getGamesFiltered(filters)
        setGames(filteredGames);
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFilters((previousValue) => ({
            ...previousValue,
            [name]: value 
        }))
    }

    const listStyle = 
    {
        paddingTop: "10px",
        display:"flex", 
        flexWrap: "wrap", 
        flexDirection: "row", 
        alignContent: "space-between", 
        justifyContent: "center", 
        alignItems: "flex-start"
    }

    const elementStyle =
    {
        padding: "5px"
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-around rounded-full">
            <ul style={listStyle}>
                <li style={elementStyle}>
                    <input
                        type="text"
                        name="category"
                        placeholder="category"
                        value={filters.category}
                        onChange={handleChange}
                        className="pl-5 rounded-full"
                    />
                </li>
                <li style={elementStyle}>
                    <input
                        type="text"
                        name="price"
                        placeholder="price"
                        value={filters.price}
                        onChange={handleChange}
                        className="pl-5 rounded-full"
                    />
                </li>
                <li style={elementStyle}>
                    <input
                        type="text"
                        name="os"
                        placeholder="operating system"
                        value={filters.os}
                        onChange={handleChange}
                        className="pl-5 rounded-full"
                    />
                </li>
                <li style={elementStyle}>
                    <input
                        type="text"
                        name="language"
                        placeholder="language"
                        value={filters.language}
                        onChange={handleChange}
                        className="pl-5 rounded-full"
                    />
                </li>
                <li style={elementStyle}>
                    <input
                        type="text"
                        name="playerCount"
                        placeholder="player count"
                        value={filters.playerCount}
                        onChange={handleChange}
                        className="pl-5 rounded-full"
                    />
                </li>
                <li style={elementStyle}>
                    <input
                        type="text"
                        name="rating"
                        placeholder="rating"
                        value={filters.rating}
                        onChange={handleChange}
                        className="pl-5 rounded-full"
                    />
                </li>
                <li style={elementStyle}>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={filters.title}
                        onChange={handleChange}
                        className="pl-5 rounded-full"
                    />
                </li>
                <button type="submit" className="btn" style={elementStyle}>
                    Search
                </button>
            </ul>
        </form>
    );
};

export default Categories;