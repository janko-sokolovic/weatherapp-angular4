import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {

    private static  WEATHER_URL =
    'http://api.openweathermap.org/data/2.5/weather?q=Belgrade,RS&appid=0fd295b33e8eaebb73738dfcfe6109a5&units=metric';

    constructor(private http: Http) {
    }

    getWeather(): Promise<Weather> {
        return this.http.get(WeatherService.WEATHER_URL)
        .toPromise()
        .then((response: any ) =>  {
            const data = response.json();
            const temp =  data.main.temp;
            const minTemp = data.main.temp_min;
            const maxTemp = data.main.temp_max;

            return new Weather(temp, minTemp, maxTemp);
        })
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>  {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
