
/**
 * These weather conditions are mapped as to respect to https://openweathermap.org/weather-conditions
 * The amount of conditions is limited due to number of icon mappings.
 * This can be extended in future
 */
export enum WeatherCondition {
    CLEAR_SKY = 800,
    THUNDERSTORM = 200,
    DRIZZLE = 300,
    RAIN = 500,
    SNOW = 600,
    ATMOSPHERE = 700,
    CLOUDS = 801,
    EXTREME = 900,
    ADDITIONAL = 950
}
