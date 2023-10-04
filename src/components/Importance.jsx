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
                        Importance
                    </h3>
                    <p>
                        The weather affects almost everything we do in our daily lives.
                        It affects what we wear and what types of activities that we do.
                        In many professions,
                        it affects either where we work or when we work, and often times,
                        it affects if we work at all that day.
                        Consider roofers, landscapers, and misc. outdoor construction workers.
                        How hot is it outside? Is it raining or snowing?
                        Is there going to be a storm today? All of these conditions will affect what they do.
                        The same goes for leisure activities. Planning on a BBQ or pool party this weekend? Think again!
                        There might be a big storm coming through. What about that baseball game you have tickets to?
                        It could get rained out or delayed.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Precision;