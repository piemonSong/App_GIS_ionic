import { Component } from '@angular/core';
import {LocationService} from '../api/location.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss']
})
export class MainPage {
  address;
  constructor(
      private locationService: LocationService,
      private geolocation: Geolocation
  ) {}
  getAddress() {

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    const watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      this.locationService.getAddress(data.coords.longitude, data.coords.latitude).subscribe(res => {
        const result = res.result.addressComponent;
        this.address = result.province  + result.city + result.county + result.address;
      });
    });
  }
}
