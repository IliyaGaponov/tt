import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class AccuWeatherService {
    apiKey = 'T3IhDAN60l1Q34fI8cmlNk3t5WkXK4D5';
    autocompliteUrl = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=' + this.apiKey + '&q=';
    currentWeatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    dailyForecustUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    geopositionSearchUrl = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=';

    constructor(private http: HttpClient) { }

    getCurrentCityPosition(lat, lng): Observable<any> {
       return this.http.get(this.geopositionSearchUrl + this.apiKey + '&q=' +
              lat + '%2C%20' + lng).pipe(
                map(response => {
                  return {
                    id: response['Key'],
                    city: response['AdministrativeArea'].EnglishName
                  };
                })
              );
    }

    cityAutocomplite(text: string): Observable<any> {
        return this.http.get(this.autocompliteUrl + text);
     }

     getCurrentWeather(key: number): Observable<any> {
        return this.http.get(this.currentWeatherUrl + key + '?apikey=' + this.apiKey);
     }

     getDailyForecast(key: number) {
      return this.http.get(this.dailyForecustUrl + key + '?apikey=' + this.apiKey).pipe(
        map(
          data => {
            const dailyForecast = data['DailyForecasts'];
            return dailyForecast.map(function(dayWeather: any) {
              return {
                date: new Date(dayWeather.Date),
                weatherText: dayWeather.Day.IconPhrase,
                temperature: dayWeather.Temperature.Minimum.Value
              };
            });
          }
        ),
        catchError(val => of(`Daily forecast error: ${val}`))
      );
     }
}
