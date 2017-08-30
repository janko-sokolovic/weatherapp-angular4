import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather } from './weather';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})
export class AppComponent implements OnInit {
  weather: Promise<Weather>;
  constructor(private weatherService: WeatherService) {
  }
  ngOnInit(): void {
    this.weather = this.weatherService.getWeather().then(weather =>  weather);
  }
}
