import React from 'react';
import WeatherIcon from './WeatherIcon';

const Forecast = ({ forecastData }) => {
    return (
        <div className="forecast">
            {forecastData.map((day, index) => (
                <div key={index} className="forecast-day">
                    <p>{day.date}</p>
                    <WeatherIcon condition={day.weather} />
                    <p>{day.temp.min}° / {day.temp.max}°</p>
                </div>
            ))}
        </div>
    );
};

export default Forecast;
