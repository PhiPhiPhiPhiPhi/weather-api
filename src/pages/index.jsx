import React from 'react';

import Navbar from 'Components/Navbar';
import Weather from 'Components/Weather';

/**
 * Render the whole Page.
 *
 * @returns {any} Render the whole page..
 */
const Home = () => (
    <>
        <Navbar />
        <Weather />
    </>
);

export default Home;