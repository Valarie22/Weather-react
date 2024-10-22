import React, { useState } from 'react';
import SearchEngine from './SearchEngine.js';
import Weather from './Weather.js';
import Forecast from './Forecast.js';
import './App.css';

const API_KEY = '5201594abea9f3e38b70e65b11a80c24';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState([]);

    const fetchWeather = async (city) => {
        try {
            // Fetch current weather data
            const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
            const weather = await weatherResponse.json();
            
            // Set current weather data
            setWeatherData(weather);

            // Fetch forecast data (5-day, every 3 hours)
            const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`);
            const forecast = await forecastResponse.json();

            // Map forecast data (filtering for one forecast per day)
            const forecastList = forecast.list.filter((item, index) => index % 8 === 0).map((day) => ({
                date: new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
                weather: day.weather[0].main,
                temp: {
                    min: Math.round(day.main.temp_min),
                    max: Math.round(day.main.temp_max)
                }
            }));

            setForecastData(forecastList);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div className="app-container">
            <SearchEngine onSearch={fetchWeather} />
            {weatherData && <Weather weatherData={weatherData} />}
            {forecastData.length > 0 && <Forecast forecastData={forecastData} />}
        </div>
    );
};

export default App;
