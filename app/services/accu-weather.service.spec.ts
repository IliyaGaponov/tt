/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccuWeatherService } from './accu-weather.service';

describe('Service: AccuWeather', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccuWeatherService]
    });
  });

  it('should ...', inject([AccuWeatherService], (service: AccuWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
