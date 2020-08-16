import { Injectable } from '@angular/core';
import { FavoritesCitiesStore } from './favorites-cities.store';
import { createFavoritesCity } from './favorites-city.model';
import { CurrWeatherHomeQuery } from '../../curr-weather-home/state/curr-weather-home.query';
import { Observable } from 'rxjs';
import { CurrWeatherHome } from '../../curr-weather-home/state/curr-weather-home.model';
import { NotificationService } from 'src/app/services/notification.service';


@Injectable({ providedIn: 'root' })
export class FavoritesCitiesService {

  constructor(private favoritesCitiesStore: FavoritesCitiesStore,
              private weatherCardQuery: CurrWeatherHomeQuery,
              private notifyService: NotificationService) {
  }

  addFavorite() {
    const weatherCard$: Observable<CurrWeatherHome> = this.getCurrCard();
    let weatherCard: CurrWeatherHome;
    weatherCard$.subscribe(card => weatherCard = card);
    this.favoritesCitiesStore.add(createFavoritesCity({weatherCard}));
    this.notifyService.showSuccess('', 'Added to favorites');

  }

  removeFavorite() {
    const currCity = this.weatherCardQuery.getAll();
    this.favoritesCitiesStore.remove(currCity[0].id);
    this.notifyService.showError('', 'Removed from favorites');
  }

  clearStore() {
    this.favoritesCitiesStore.remove();
  }

  getCurrCard(): Observable<CurrWeatherHome> {
    return this.weatherCardQuery.selectFirst();
  }
}
