import React from 'react';

import Image from 'next/image';

/**
 * The Accessibility text component.
 *
 * @returns {any} The Accessiblity text component.
 */
const Accessibility = () => (
    <div className="container">
        <div className="row py-5 weather__text-image ">
            <div className="col-lg-6 col-12">
                <div className="weather-topic">
                    <h3>
                        Accessibility and Convenience
                    </h3>
                    <p>
                        Weather apps provide immediate access to up-to-date weather information at your fingertips.
                        You can check the forecast for your location or any
                        other place in the world with just a few taps on your smartphone.
                        This convenience saves time compared to traditional
                        methods like watching the news or waiting for radio updates.
                    </p>
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <Image
                    alt="Weatherstate"
                    height={200}
                    priority={false}
                    src="/wetter-img-1.jpg"
                    width={400}
                />
            </div>
        </div>
    </div>
);

export default Accessibility;