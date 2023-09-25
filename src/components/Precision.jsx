import React from 'react';

import Image from 'next/image';

/**
 * The Precision text component.
 *
 * @returns {any} The Precision text component.
 */
const Precision = () => (
    <div className="container">
        <div className="row py-5 weather__text-image reverse">
            <div className="col-lg-6 col-12">
                <Image
                    alt="Weatherstate"
                    height={200}
                    src="/wetter-img-2.jpg"
                    width={400}
                />
            </div>
            <div className="col-lg-6 col-12">
                <div className="weather-topic">
                    <h3>
                        Precision and Accuracy
                    </h3>
                    <p>
                        Weather apps use advanced
                        meteorological data and algorithms to provide highly accurate forecasts.
                        They take into account a wide range of variables,
                        including temperature, humidity, wind speed, precipitation, and atmospheric pressure.
                        This precision helps individuals and businesses plan their activities with greater confidence.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Precision;