import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureConvertorService {

constructor() { }

  fromCtoF(number: number) {
    number = parseFloat(number.toString());

    return parseInt(((number * 1.8) + 32).toFixed(0), 10);
  }

  fromFtoC(number: number) {
    number = parseFloat(number.toString());

    return parseInt(((number - 32) / 1.8).toFixed(0), 10);
  }

}
