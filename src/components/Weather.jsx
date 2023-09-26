import React, {useState} from 'react';

import Image from 'next/image';

import {getBackgroundColorClass} from 'Utils/getBackgroundColor';
import {getWeatherImage} from 'Utils/getWeatherImage';
import {useWeatherDataApi} from 'Utils/useWeather';

/**
 * Render the Weather Component.
 *
 * @param {any} props.updateCity Update the useState City.
 * @param {any} props            Props update the City.
 * @returns { any } The Weather Component.
 */
const Weather = ({updateCity}) => {
    const [city, setCity] = useState('London');
    const weatherData = useWeatherDataApi(city);
    /**
     * Get the City.
     *
     * @param {any} e Get the City Value.
     */
    const handleCityChange = e => {
        const newCity = e.target.value;

        setCity(newCity);
    };

    /**
     * Update the API Call.
     */
    const handleSearchClick = () => {
        updateCity(city);
    };

    const backgroundColorClass = getBackgroundColorClass(weatherData);
    const weatherImage = getWeatherImage(weatherData);

    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-lg-6 col-12">
                    <div className="weather__status">
                        {weatherData && (
                            <Image
                                alt="Weatherstate"
                                height={100}
                                src={weatherImage}
                                width={100}
                            />
                        )}
                        <div className="weather__description">
                            {weatherData ? (
                                <>
                                    <h1>{weatherData.name}</h1>
                                    <p>{weatherData.main.temp}°C</p>
                                    <p>{weatherData.weather[0].main}</p>
                                    <p>{weatherData.weather[0].description}</p>
                                </>
                            ) : (
                                <p>Loading Weather</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="weather__location d-flex flex-column">
                        <h3>Choose Location</h3>
                        <small>Reminder pls Enter the City in english</small>
                        <input
                            placeholder="Please enter a City"
                            type="text"
                            value={city}
                            onChange={handleCityChange}
                        />
                        <button
                            className={backgroundColorClass}
                            type="button"
                            onClick={handleSearchClick}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Weather;