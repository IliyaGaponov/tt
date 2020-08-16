/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrentGeolocationService } from './currentGeolocation.service';

describe('Service: CurrentGeolocation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentGeolocationService]
    });
  });

  it('should ...', inject([CurrentGeolocationService], (service: CurrentGeolocationService) => {
    expect(service).toBeTruthy();
  }));
});
