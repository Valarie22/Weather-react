import React from 'react';
import WeatherIcon from './WeatherIcon';

const Weather = ({ weatherData }) => {
    if (!weatherData) return <div>No data available</div>;

    return (
        <div className="weather-display">
            <h2>{weatherData.name}</h2>
            <p>{new Date().toLocaleString()}</p>
            <p>{weatherData.weather[0].description}</p>
            <div className="temperature">
                <WeatherIcon condition={weatherData.weather[0].main} />
                <span>{Math.round(weatherData.main.temp)}°C</span>
            </div>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind: {weatherData.wind.speed} km/h</p>
        </div>
    );
};

export default Weather;
