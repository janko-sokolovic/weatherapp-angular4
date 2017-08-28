import { Injectable } from '@angular/core';
import { Weather } from './weather';

@Injectable()
export class WeatherService {
    getWeather(): Promise<Weather> {
        return Promise.resolve(null);
    }
}
