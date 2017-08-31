import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import 'rxjs/add/operator/mergeMap';

@Injectable()
export class WeatherService {

    private static WEATHER_URL =
    'http://api.openweathermap.org/data/2.5/weather?q=Belgrade,RS&appid=0fd295b33e8eaebb73738dfcfe6109a5&units=metric';

    constructor(private http: Http) {}

    getWeather(): Observable<Weather> {
        return Observable.interval(5000)
            .startWith(0)
            .switchMap(() => this.http.get(WeatherService.WEATHER_URL)
                .map((response: Response) => new Weather(response.json().main.temp))
                .catch(this.handleError)
            );
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
