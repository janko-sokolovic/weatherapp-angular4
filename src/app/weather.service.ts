import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { WeatherConditionsMapperService } from './weather-conditions-mapper.service';
import { WeatherIconMapperService } from './weather-icon-mapper.service';
import 'rxjs/Rx';

import 'rxjs/add/operator/mergeMap';


@Injectable()
export class WeatherService {

    private static WEATHER_URL =
    'http://api.openweathermap.org/data/2.5/weather?q=Belgrade,RS&appid=0fd295b33e8eaebb73738dfcfe6109a5&units=metric';

    constructor(private http: Http, private conditionMapper: WeatherConditionsMapperService, iconMapper: WeatherIconMapperService) { }

    private static isDayNow(data): boolean {
        const currentTimeUnix = data.dt;
        const sunriseTimeUnix = data.sys.sunrise;
        const sunsetTimeUnix = data.sys.sunset;

        return sunriseTimeUnix < currentTimeUnix && currentTimeUnix < sunsetTimeUnix;
    }

    getWeather(): Observable<Weather> {
        return Observable.interval(5000)
            .startWith(0)
            .switchMap(() => this.http.get(WeatherService.WEATHER_URL)
                .map(this.toWeather)
                .catch(this.handleError)
            );
    }

    private toWeather(response: Response): Weather {
        const data = response.json();

        return new Weather(data.main.temp, data.weather[0].id, WeatherService.isDayNow(data), 'wi-day-sunny');
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
