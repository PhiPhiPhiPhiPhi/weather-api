import {useEffect, useState} from 'react';


/**
 * The Api Component.
 */
const WeatherApi = () => {
    const [selected, setSelected] = useState([]);

    const [weather, setWeather] = useState([]);

    /**
     * Get the Api Call.
     */
    const fetchCityData = async () => {
        try {
            const response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=London,England,GB&appid=58b2a547f49cbf2ef16f3eca5e277ff8');
            const data = await response.json();
            const city = data[0].name;
            const {state} = data[0];
            const {country} = data[0];

            const response2 = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=58b2a547f49cbf2ef16f3eca5e277ff8`);
            const data2 = await response2.json();
            const {lat} = data2[0];
            const {lon} = data2[0];

            const response3 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=en&appid=58b2a547f49cbf2ef16f3eca5e277ff8`);
            const data3 = await response3.json();

            console.log(data3);

            setSelected([data3.weather.name]);
            setWeather([data3.weather[0].description]);
        } catch (error) {
            console.log('not found', error);
        }
    };

    useEffect(() => {
        fetchCityData();
    }, []);
};


export default WeatherApi;