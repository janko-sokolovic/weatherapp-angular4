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

    constructor(private http: Http,
        private conditionMapper: WeatherConditionsMapperService,
        private iconMapper: WeatherIconMapperService) {
        }

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
                .map(response => this.toWeather(response)) // needs to be  lambda, reference will fail.
                .catch(this.handleError)
            );
    }

    private toWeather(response: Response): Weather {
        console.log(this.conditionMapper, this.iconMapper);
        const data = response.json();
        const isDay = WeatherService.isDayNow(data);
        const conditionId = this.conditionMapper.mapFromId(parseInt(data.weather[0].id, 10));

        return new Weather(data.main.temp,  conditionId, isDay, this.iconMapper.toClassName(conditionId, isDay));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
