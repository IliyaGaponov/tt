import { Component, OnInit } from '@angular/core';
import { AccuWeatherService } from 'src/app/services/accu-weather.service';
import { CurrWeatherHomeService } from '../../store/curr-weather-home/state/curr-weather-home.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-search-line',
  templateUrl: './search-line.component.html',
  styleUrls: ['./search-line.component.scss']
})

export class SearchLineComponent implements OnInit {
  public model: any;

  constructor(private accuWeatherServive: AccuWeatherService, private currWeatherService: CurrWeatherHomeService) { }

  ngOnInit() {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap( (searchText) =>  this.accuWeatherServive.cityAutocomplite(searchText).pipe(
        map(
          (cityItem: any[]) => cityItem.filter(
              cityName => cityName.LocalizedName.toLowerCase()
                .indexOf(searchText.toLowerCase()) > -1).slice(0, 10)),
            ))
    )

    resultFormatBandListValue(value: any) {
      return value.LocalizedName;
    }

    inputFormatBandListValue(value: any) {
      if (value.LocalizedName) {
        return value.LocalizedName;
      }

      return value;
    }

    itemSelected($event) {
      const city = {
        city: $event.item.LocalizedName,
        id: $event.item.Key
      };

      this.currWeatherService.addCityCard(city);
    }
}
