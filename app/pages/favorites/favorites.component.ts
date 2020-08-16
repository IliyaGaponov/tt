import { Component, OnInit } from '@angular/core';
import { FavoritesCitiesQuery } from '../../store/favorites-cities/state/favorites-cities.query';
import { FavoritesCity } from '../../store/favorites-cities/state/favorites-city.model';
import { Observable } from 'rxjs';
import { CurrWeatherHomeService } from 'src/app/store/curr-weather-home/state/curr-weather-home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites$: Observable<FavoritesCity[]>;
  count: number;

  constructor(private favoritesQuery: FavoritesCitiesQuery,
              private currWeatherService: CurrWeatherHomeService,
              private _router: Router) { }

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favorites$ = this.favoritesQuery.selectAll();
    this.count = this.favoritesQuery.getCount();
    console.log(this.count);
  }

  showCityWeather(city: FavoritesCity) {
    this.currWeatherService.addCityCard({id: city.id, city: city.weatherCard.title, isFavorite: true});
    this._router.navigate(['home']);
  }
}
