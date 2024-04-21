"use client";
import { useState, useEffect } from "react";

const BASEE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const SearchBar = ({setRecipies}) => {

    const [userInput, setUserInput] = useState("");

    const fetchData  = async (value) => {
        const response = await fetch(`${BASEE_URL}${value}`);
        const data = await response.json();
        const results = data.meals;
        setRecipies(results);
    };

    const handleSearch = (value) => {
        setUserInput(value);
        fetchData(value);
    };

    return (
        <div className="w-full">
            <div className="flex flex-row items-center rounded-full w-full h-10 bg-orange-100 text-center text-orange-700 px-4 drop-shadow-lg hover:bg-orange-200">
                <input
                value={userInput}
                placeholder="Search"
                className="border-none bg-transparent w-full h-full ml-4 focus:outline-none"
                onChange={(e) => {handleSearch(e.target.value)}}
                />
            </div>
        </div> 
    );

}

export default SearchBar;