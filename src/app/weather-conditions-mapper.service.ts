
import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { WeatherCondition } from './weather-condition';


/**
 * Maps the id from api response to weather condition enum.
 * Numbers are hardcoded regarding the ids from https://openweathermap.org/weather-conditions
 * Example:  id 800 = "clear sky"
 * UGLY? I know. Feel free to fork-out and make it nicer.
 */
@Injectable()
export class WeatherConditionsMapperService {

    constructor() { }

    static mapFromId(id: number): WeatherCondition {

        if (id > 999 || id < 200) {
            throw Error('Condition id is invalid.');
        }

        if (id >= 200 && id < 300) {
            return WeatherCondition.THUNDERSTORM;
        }

        if (id >= 300 && id < 400) {
            return WeatherCondition.DRIZZLE;
        }

        if (id >= 500 && id < 600) {
            return WeatherCondition.RAIN;
        }

        if (id >= 600 && id < 700) {
            return WeatherCondition.SNOW;
        }

        if (id >= 700 && id < 800) {
            return WeatherCondition.ATMOSPHERE;
        }

        if (id === 800) {
            return WeatherCondition.CLEAR_SKY;
        }

        if (id >= 801 && id < 810) {
            return WeatherCondition.CLOUDS;
        }

        if (id >= 900 && id < 910) {
            return WeatherCondition.EXTREME;
        }

        if (id >= 910 && id < 1000) {
            return WeatherCondition.ADDITIONAL;
        }

        return WeatherCondition.CLEAR_SKY;
    }
}
