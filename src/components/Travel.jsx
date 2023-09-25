import React from 'react';

import Image from 'next/image';

/**
 * The Travel text component.
 *
 * @returns {any} The Travel text component.
 */
const Travel = () => (
    <div className="container">
        <div className="row py-5 weather__text-image reverse">
            <div className="col-lg-6 col-12">
                <Image
                    alt="Weatherstate"
                    height={200}
                    src="/wetter-img-4.jpg"
                    width={400}
                />
            </div>
            <div className="col-lg-6 col-12">
                <div className="weather-topic">
                    <h3>
                        Travel Planning
                    </h3>
                    <p>
                        Weather apps are invaluable for travelers.
                        Whether you&apos;re planning a weekend getaway or a long-distance trip,
                        knowing the weather at your destination and along your route is essential.
                        Weather apps provide forecasts for multiple locations,
                        making travel planning more convenient and efficient
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Travel;