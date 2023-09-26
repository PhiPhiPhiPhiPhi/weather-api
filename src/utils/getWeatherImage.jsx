/**
 * Get the Weather Condition.
 *
 * @returns {any} Get the Weather Condiditon.
 * @param {any} weatherData Get the Weather Condidtion.
 */
export const getWeatherImage = weatherData => {
    const weatherCondition = weatherData?.weather?.[0]?.main;

    const weatherConditionImage = {
        Ash: '/cloudy.png',
        Clear: '/sun.png',
        Clouds: '/cloudy.png',
        Drizzle: '/rainy.png',
        Dust: '/sand.png',
        Fog: '/fog.png',
        Haze: '/haze.png',
        Mist: '/fog.png',
        Rain: '/rainy.png',
        Smoke: '/fog.png',
        Snow: '/snow.png',
        Squall: '/stormy.png',
        Thunderstorm: '/stormy.png',
        Tornado: '/tornado.png'

    };

    return weatherConditionImage?.[weatherCondition] || '';
};