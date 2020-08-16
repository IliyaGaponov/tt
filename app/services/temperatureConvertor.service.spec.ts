/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TemperatureConvertorService } from './temperatureConvertor.service';

describe('Service: TemperatureConvertor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemperatureConvertorService]
    });
  });

  it('should ...', inject([TemperatureConvertorService], (service: TemperatureConvertorService) => {
    expect(service).toBeTruthy();
  }));
});
