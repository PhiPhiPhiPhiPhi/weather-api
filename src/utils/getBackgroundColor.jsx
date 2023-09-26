/**
 * Get the Weather Condition.
 *
 * @returns {any} Get the Weather Condiditon.
 * @param {any} weatherData Get the Weather Condidtion.
 */
export const getBackgroundColorClass = weatherData => {
    const weatherCondition = weatherData?.weather?.[0]?.main;

    const weatherConditionToColorClass = {
        Ash: 'ashy-weather',
        Clear: 'clear-weather',
        Clouds: 'cloudy-weather',
        Drizzle: 'drizzle-weather',
        Dust: 'dusty-weather',
        Fog: 'foggy-waether',
        Haze: 'hazy-weather',
        Mist: 'misty-weather',
        Rain: 'rainy-weather',
        Smoke: 'smoky-weather',
        Snow: 'snowy-weather',
        Squall: 'squally-weather',
        Thunderstorm: 'stormy-weather',
        Tornado: 'tornado-weather'

    };

    return weatherConditionToColorClass?.[weatherCondition] || '';
};