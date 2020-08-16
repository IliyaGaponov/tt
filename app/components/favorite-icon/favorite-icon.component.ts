import { Component, OnInit } from '@angular/core';
import { FavoritesCitiesService } from '../../store/favorites-cities/state/favorites-cities.service';
import { CurrWeatherHomeQuery } from 'src/app/store/curr-weather-home/state/curr-weather-home.query';
import { Observable } from 'rxjs';
import { CurrWeatherHomeService } from 'src/app/store/curr-weather-home/state/curr-weather-home.service';

@Component({
  selector: 'app-favorite-icon',
  templateUrl: './favorite-icon.component.html',
  styleUrls: ['./favorite-icon.component.scss']
})
export class FavoriteIconComponent implements OnInit {
  isFavorite$: Observable<boolean>;

  constructor(private favoritsService: FavoritesCitiesService,
              private currWeatherQuery: CurrWeatherHomeQuery,
              private currWeatherService: CurrWeatherHomeService) { }

  ngOnInit(): void {
    this.setFavorite();
  }
  setFavorite() {
    this.isFavorite$ = this.currWeatherQuery.selectFirst(entity => entity.isFavorite);
  }

  onFavoriteImgClick() {
    let isFavorite;
    this.isFavorite$.subscribe(bool => isFavorite = bool);
    this.currWeatherService.updateFavorite(!isFavorite);
    isFavorite ? this.favoritsService.addFavorite() : this.favoritsService.removeFavorite();
  }
}
