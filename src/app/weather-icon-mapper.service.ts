import { WeatherCondition } from './weather-condition';
import { Injectable } from '@angular/core';
import { WeatherIconClass } from './weather-icons-classes';

@Injectable()
export class WeatherIconMapperService {
    constructor() { }

    toClassName(condition: WeatherCondition, isDay: boolean): string {

        switch (condition) {
            case WeatherCondition.CLEAR_SKY:
                return isDay ? WeatherIconClass.CLEAR_SKY_DAY : WeatherIconClass.CLEAR_SKY_NIGHT;
            case WeatherCondition.THUNDERSTORM:
                return isDay ? WeatherIconClass.THUNDERSTORM_DAY : WeatherIconClass.THUNDERSTORM_NIGHT;
            case WeatherCondition.DRIZZLE:
                return isDay ? WeatherIconClass.DRIZZLE_DAY : WeatherIconClass.DRIZZLE_NIGHT;
            case WeatherCondition.RAIN:
                return isDay ? WeatherIconClass.RAIN_DAY : WeatherIconClass.RAIN_NIGHT;
            case WeatherCondition.SNOW:
                return isDay ? WeatherIconClass.SNOW_DAY : WeatherIconClass.SNOW_NIGHT;
            case WeatherCondition.ATMOSPHERE:
                return isDay ? WeatherIconClass.ATMOSPHERE_DAY : WeatherIconClass.ATMOSPHERE_NIGHT;
            case WeatherCondition.CLOUDS:
                return isDay ? WeatherIconClass.CLOUDS_DAY : WeatherIconClass.CLOUDS_NIGHT;
            case WeatherCondition.EXTREME:
                return isDay ? WeatherIconClass.EXTREME_DAY : WeatherIconClass.EXTREME_NIGHT;
            case WeatherCondition.ADDITIONAL:
                return isDay ? WeatherIconClass.ADDITIONAL_DAY : WeatherIconClass.ADDITIONAL_NIGHT;
            default:
                return WeatherIconClass.CLEAR_SKY_DAY;
        }
    }

}
