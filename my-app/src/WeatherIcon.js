import React from 'react';
import { FaSun, FaCloudRain, FaCloud, FaSnowflake } from 'react-icons/fa';

const WeatherIcon = ({ condition }) => {
    const iconMap = {
        Clear: <FaSun />,
        Rain: <FaCloudRain />,
        Clouds: <FaCloud />,
        Snow: <FaSnowflake />,
    };

    return iconMap[condition] || <FaSun />;
};

export default WeatherIcon;
