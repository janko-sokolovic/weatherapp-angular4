import { WeatherCondition } from './weather-condition';

export class Weather {
    constructor(public temp: number, public conditions: WeatherCondition, public isDay: boolean, public iconClass: string) {

    }
}
