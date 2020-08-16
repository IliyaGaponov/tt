import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CurrWeatherHomeStore, CurrWeatherHomeState } from './curr-weather-home.store';
import { CurrWeatherHome } from './curr-weather-home.model';

@Injectable({
  providedIn: 'root'
})
export class CurrWeatherHomeQuery extends QueryEntity<CurrWeatherHomeState, CurrWeatherHome> {

  constructor(protected store: CurrWeatherHomeStore) {
    super(store);
  }

}
