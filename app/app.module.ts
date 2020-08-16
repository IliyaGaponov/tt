import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchLineComponent } from './components/search-line/search-line.component';
import { AccuWeatherService } from './services/accu-weather.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FavoriteIconComponent } from './components/favorite-icon/favorite-icon.component';
import { HomeCurrWeatherComponent } from './components/home-curr-weather/home-curr-weather.component';
import { DailyForecastComponent } from './components/daily-forecast/daily-forecast.component';
import { CardComponent } from './components/card/card.component';
import { ToastrModule } from 'ngx-toastr';
import { TemperatureConvertorService } from './services/temperatureConvertor.service';
import { NotificationService } from './services/notification.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'favorites', component: FavoritesComponent, data: {animation: 'FavoritesPage'}},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    NavbarComponent,
    SearchLineComponent,
    FavoriteIconComponent,
    HomeCurrWeatherComponent,
    DailyForecastComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AccuWeatherService,
    TemperatureConvertorService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
