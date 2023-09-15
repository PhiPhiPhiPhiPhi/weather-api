import Image from 'next/image';

/**
 * Render the Weather Component.
 *
 * @returns { any } The Weather Component.
 */
const Weather = () => (
    <div className="container">
        <div className="row py-5">
            <div className="col-lg-7 col-12">
                <div className="weather__status">
                    <Image
                        alt="Weatherstate"
                        height={100}
                        src="/sun.png"
                        width={100}
                    />
                    <div className="weather__description" />
                </div>
            </div>
            <div className="col-lg-5 col-12">
                <div className="weather__location d-flex flex-column">
                    <label>Choose Location</label>
                    <select>
                        <option />
                    </select>
                </div>
            </div>
        </div>
    </div>
);


export default Weather;