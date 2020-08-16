import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';


@Injectable({
  providedIn: 'root'
})
export class CurrentGeolocationService {

constructor(public notifyService: NotificationService) { }
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
          console.log(err);
          this.notifyService.showError('', 'Location permission error');
        });
    });
  }
}
