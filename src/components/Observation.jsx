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
                        Observation
                    </h3>
                    <p>
                        Observing the daily weather is part of a regular routine for many of us,
                        helping us decide what to wear and which activities we will do each day.
                        Similar observations of atmospheric conditions are also required by meteorologists to develop
                        those weather forecasts with which we are all familiar.
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