import { ID } from '@datorama/akita';

export interface CurrWeatherHome {
  id: ID;
  title: string;
  temperatureC: number;
  temperatureF: number;
  weatherText: string;
  isFavorite: boolean;
}

export function createCurrWeatherHome(params: Partial<CurrWeatherHome>) {
  return {
    id: params.id,
    title: params.title,
    temperatureC: params.temperatureC,
    temperatureF: params.temperatureF,
    weatherText: params.weatherText,
    isFavorite: params.isFavorite
  } as CurrWeatherHome;
}
