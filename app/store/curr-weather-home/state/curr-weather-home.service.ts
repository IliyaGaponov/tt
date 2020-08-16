import { Injectable } from '@angular/core';
import { CurrWeatherHomeStore } from './curr-weather-home.store';
import { CurrWeatherHome, createCurrWeatherHome } from './curr-weather-home.model';
import { AccuWeatherService } from '../../../services/accu-weather.service';
import { Observable } from 'rxjs';
import { CurrWeatherHomeQuery } from './curr-weather-home.query';


@Injectable({ providedIn: 'root' })
export class CurrWeatherHomeService {

  constructor(private currWeatherHomeStore: CurrWeatherHomeStore,
              private weatherCardQuery: CurrWeatherHomeQuery,
              private accuWeatherService: AccuWeatherService) {
  }

  getCurrWeather(cityKey: number): Observable<any> {
    return this.accuWeatherService.getCurrentWeather(cityKey);
  }

  addCityCard(cityObj: any) {
    let weatherCard: CurrWeatherHome;
    let isCityInFavorite = false;
    if ('isFavorite' in cityObj) {
      isCityInFavorite = true;
    }

    this.getCurrWeather(cityObj.id).subscribe(
      currWeatherResp => {
        weatherCard = createCurrWeatherHome({
          id: cityObj.id,
          title: cityObj.city,
          temperatureC: currWeatherResp[0].Temperature.Metric.Value,
          temperatureF: currWeatherResp[0].Temperature.Imperial.Value,
          weatherText: currWeatherResp[0].WeatherText,
          isFavorite: isCityInFavorite
        });

        if (this.weatherCardQuery.getEntity(cityObj.id)) {
          this.currWeatherHomeStore.replace(cityObj.id, weatherCard);
        }
        else {
          this.currWeatherHomeStore.remove();
          this.currWeatherHomeStore.add(weatherCard);
        }
      },
      error => console.log(error + '\n GetCurrentWeather response error')
    );
  }

  updateFavorite(favorite: boolean) {
    this.currWeatherHomeStore.update(null, {isFavorite: favorite});
  }

  clearStore() {
    this.currWeatherHomeStore.remove();
  }
}
