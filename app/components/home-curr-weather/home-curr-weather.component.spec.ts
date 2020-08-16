import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCurrWeatherComponent } from './home-curr-weather.component';

describe('HomeCurrWeatherComponent', () => {
  let component: HomeCurrWeatherComponent;
  let fixture: ComponentFixture<HomeCurrWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCurrWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCurrWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
