import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ID } from '@datorama/akita';
import { CurrWeatherHomeQuery } from 'src/app/store/curr-weather-home/state/curr-weather-home.query';
import { AccuWeatherService } from 'src/app/services/accu-weather.service';
import { TemperatureConvertorService } from 'src/app/services/temperatureConvertor.service';
import { DailyForecast } from '../../models/dailyForecast';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent implements OnInit {
  cityId$: Observable<ID>;
  dailyForecast: DailyForecast[];
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor(private currWeatherQuery: CurrWeatherHomeQuery,
              private accuWeatherService: AccuWeatherService,
              private temperatureService: TemperatureConvertorService) { }

  ngOnInit(): void {
    this.loadDailyForecast();
  }

  loadDailyForecast() {
    let cityId;

    this.currWeatherQuery.selectFirst(entity => entity.id).subscribe(
      id => {
        if (id) {
          cityId = id;
          this.accuWeatherService.getDailyForecast(cityId).subscribe(
            data => {
              this.dailyForecast = data;
              this.dailyForecast.forEach(element =>
                element.temperature = this.temperatureService.fromFtoC(element.temperature));
            },
            error => console.log(error + '\n GetDailyForecast response error')
            );
        }
      }
    );
  }
}
