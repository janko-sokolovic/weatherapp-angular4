import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { WEATHER } from './mock.weather';

@Injectable()
export class WeatherService {

    getWeather(): Promise<any> {
        return Promise.resolve(WEATHER);
    }
    getWeatherSlowly(): Promise<Weather> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getWeather()), 2000);
          });
    }
}
