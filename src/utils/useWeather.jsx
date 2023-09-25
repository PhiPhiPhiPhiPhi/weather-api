import React, {createContext, useContext, useEffect, useState} from 'react';

const weatherDataApiContext = createContext();

/**
 * Export the WeatherApi so its useable for all component.
 *
 *@returns {any} Make the Api Call avaiable for all Component.
 *
 */
export const useWeatherDataApi = () => useContext(weatherDataApiContext);

/**
 * The Api Call.
 *
 * @returns {any}              Make the Api Call.
 * @param {any} props          The Props.
 * @param {any} props.children The Props children.
 */
const WeatherApi = ({children}) => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('Berlin');


    /**
     * Update the City.
     *
     * @param {any} newCity Update the City.
     */
    const updateCity = newCity => {
        setCity(newCity);
    };

    useEffect(() => {
        /**
         * The Api Call of the City.
         */
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b48dce7f68419400e1b64263095e240`);
                const data = await response.json();

                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, [city]);

    return (
        <weatherDataApiContext.Provider value={weatherData}>
            {children(updateCity)}
        </weatherDataApiContext.Provider>
    );
};

export default WeatherApi;