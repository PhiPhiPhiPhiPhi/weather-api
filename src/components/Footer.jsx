import React from 'react';

import {getBackgroundColorClass} from 'Utils/getBackgroundColor';
import {useWeatherDataApi} from 'Utils/useWeather';


/**
 * The Footer Component.
 *
 * @returns { any } The Footer Component.
 */
const Footer = () => {
    const weatherData = useWeatherDataApi();
    const backgroundColorClass = getBackgroundColorClass(weatherData);

    return (
        <footer className={backgroundColorClass}>
            <h2>
                Made by Phi
            </h2>
        </footer>
    );
};


export default Footer;