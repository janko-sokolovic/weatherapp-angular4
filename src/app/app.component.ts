import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather } from './weather';
import { Observable } from 'rxjs/Observable';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../css/weather-icons.css' ],
  providers: [WeatherService]
})
export class AppComponent implements OnInit {
  weather: Observable<Weather>;

  errorMessage: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeather()
    .subscribe( (weather: Weather) => {
       this.weather = Observable.of(weather);
    },
    error => this.errorMessage = <any>error);
  }

}
