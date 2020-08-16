import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { CurrWeatherHome } from './curr-weather-home.model';

export interface CurrWeatherHomeState extends EntityState<CurrWeatherHome> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'curr-weather-home' })
export class CurrWeatherHomeStore extends EntityStore<CurrWeatherHomeState, CurrWeatherHome> {

  constructor() {
    super();
  }

}

