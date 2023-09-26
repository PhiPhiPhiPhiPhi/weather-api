import React from 'react';

import {getBackgroundColorClass} from 'Utils/getBackgroundColor';
import {useWeatherDataApi} from 'Utils/useWeather';

/**
 * The Navbar Component.
 *
 * @returns {any} Nothing.
 *
 */
const Navbar = () => {
    const weatherData = useWeatherDataApi();
    const backgroundColorClass = getBackgroundColorClass(weatherData);

    return (
        <nav className={`nav ${backgroundColorClass}`}>
            <h2>My Weather App</h2>
        </nav>
    );
};


export default Navbar;