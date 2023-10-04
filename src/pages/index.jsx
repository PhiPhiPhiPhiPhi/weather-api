import React from 'react';

import Footer from 'Components/Footer';
import Importance from 'Components/Importance';
import Navbar from 'Components/Navbar';
import Observation from 'Components/Observation';
import Weather from 'Components/Weather';

import WeatherApi from 'Utils/useWeather';
/**
 * Render the whole Page.
 *
 * @returns {any} Render the whole page..
 */
const Home = () => (
    <WeatherApi>
        {updateCity => (
            <>
                <Navbar />
                <Weather updateCity={updateCity} />
                <Observation />
                <Importance />
                <Footer />
            </>
        )}
    </WeatherApi>
);

export default Home;