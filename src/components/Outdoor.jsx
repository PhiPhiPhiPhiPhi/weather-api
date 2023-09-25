import React from 'react';

import Image from 'next/image';

/**
 * The Outdoor text component.
 *
 * @returns {any} The Outdoor text component.
 */
const Outdoor = () => (
    <div className="container">
        <div className="row py-5 weather__text-image ">
            <div className="col-lg-6 col-12">
                <div className="weather-topic">
                    <h3>
                        Outdoor Activities
                    </h3>
                    <p>
                        For outdoor enthusiasts, hikers, campers, and athletes, weather apps help
                        plan activities based on weather conditions.
                        You can decide whether
                        it&apos;s a good day for a hike, a picnic, or a round of golf, considering factors
                        like temperature, wind, and precipitation.
                    </p>
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <Image
                    alt="Weatherstate"
                    height={200}
                    src="/wetter-img-3.jpg"
                    width={400}
                />
            </div>
        </div>
    </div>
);

export default Outdoor;