import React, { useState } from 'react';

const SearchEngine = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        if (city !== "") {
            onSearch(city);
        }
    };

    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Enter city..." 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchEngine;
