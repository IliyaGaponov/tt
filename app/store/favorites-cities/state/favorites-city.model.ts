import { ID, guid } from '@datorama/akita';
import { CurrWeatherHome } from '../../curr-weather-home/state/curr-weather-home.model';

export interface FavoritesCity {
  id: ID;
  weatherCard: CurrWeatherHome;
}

/**
 * A factory function that creates FavoritesCities
 */
export function createFavoritesCity(params: Partial<FavoritesCity>) {
  return {
    id: params.weatherCard.id,
    weatherCard: params.weatherCard
  } as FavoritesCity;
}
