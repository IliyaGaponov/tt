import { Component, OnInit, Input } from '@angular/core';
import { TemperatureConvertorService } from 'src/app/services/temperatureConvertor.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() weatherText: string;
  @Input() temperature: number;
  currUnit = 'celcius';

  constructor(private unitConvertor: TemperatureConvertorService) { }

  ngOnInit(): void {
  }

  changeUnit() {
    if (this.currUnit === 'celcius') {
      this.temperature = this.unitConvertor.fromCtoF(this.temperature);
      this.currUnit = 'fahrenheit';
    }
    else if (this.currUnit === 'fahrenheit') {
      this.temperature = this.unitConvertor.fromFtoC(this.temperature);
      this.currUnit = 'celcius';
    }
  }
}
