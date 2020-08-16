import { Component, OnInit } from '@angular/core';
import { CurrWeatherHomeQuery } from '../../store/curr-weather-home/state/curr-weather-home.query';
import { CurrWeatherHome } from '../../store/curr-weather-home/state/curr-weather-home.model';
import { Observable } from 'rxjs';
import { CurrWeatherHomeService } from 'src/app/store/curr-weather-home/state/curr-weather-home.service';
import { AccuWeatherService } from 'src/app/services/accu-weather.service';
import { CurrentGeolocationService } from 'src/app/services/currentGeolocation.service';
import { NotificationService } from 'src/app/services/notification.service';
import { TemperatureConvertorService } from 'src/app/services/temperatureConvertor.service';

@Component({
  selector: 'app-home-curr-weather',
  templateUrl: './home-curr-weather.component.html',
  styleUrls: ['./home-curr-weather.component.scss']
})
export class HomeCurrWeatherComponent implements OnInit {
  card$: Observable<CurrWeatherHome> = new Observable<CurrWeatherHome>();
  defaultCity = {
    city: 'Tel Aviv',
    id: 215854
  };
  currUnit = 'celcius';

  constructor(private currWeatherQuery: CurrWeatherHomeQuery,
              private geolocationService: CurrentGeolocationService,
              private currWeatherService: CurrWeatherHomeService,
              private accuWeatherService: AccuWeatherService,
              private unitConvertor: TemperatureConvertorService,
              private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.getCityWeatherCard();
  }

  async getCityWeatherCard() {
    let lat, lng;
    const count = this.currWeatherQuery.getCount();
    if (count === 0) {
        await this.geolocationService.getPosition().then(pos => {
          lat = pos.lat;
          lng = pos.lng;
         }).catch( err => {
          this.currWeatherService.addCityCard(this.defaultCity);
         });

         if ( lat && lng) {
          this.accuWeatherService.getCurrentCityPosition(lat, lng).subscribe(
            city => {
              this.defaultCity = city;
            },
            error => {
              this.notifyService.showError('', "Can't define your current location");
            }
          );

          this.currWeatherService.addCityCard(this.defaultCity);
         }

        }

    this.card$ = this.currWeatherQuery.selectFirst();
  }

  changeUnit() {
    this.currUnit === 'celcius' ? this.currUnit = 'fahrenheit' : this.currUnit = 'celcius';
  }
}
