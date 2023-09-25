import React from 'react';

import Accessibility from 'Components/Accessibility';
import Footer from 'Components/Footer';
import Navbar from 'Components/Navbar';
import Outdoor from 'Components/Outdoor';
import Precision from 'Components/Precision';
import Travel from 'Components/Travel';
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
                <Accessibility />
                <Precision />
                <Outdoor />
                <Travel />
                <Footer />
            </>
        )}
    </WeatherApi>
);

export default Home;