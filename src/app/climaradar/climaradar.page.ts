import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
@Component({
  selector: 'app-climaradar',
  templateUrl: './climaradar.page.html',
  styleUrls: ['./climaradar.page.scss'],
})
export class ClimaradarPage  implements OnInit{
  latitude: any = 0; //latitude
  longitude: any = 0; //longitude
  address: string;
  
  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder
  ) {}
  ngOnInit() {
    
  }
  // geolocation options
  options = {
    timeout: 10000, 
    enableHighAccuracy: true, 
    maximumAge: 3600
  };
  // use geolocation to get user's device coordinates
  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp)
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.getAddress(this.latitude, this.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  // geocoder options
  nativeGeocoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  // get address using coordinates
  getAddress(lat,long){
    this.nativeGeocoder.reverseGeocode(lat, long, this.nativeGeocoderOptions)
    .then((res: NativeGeocoderResult[]) => {
      this.address = this.pretifyAddress(res[0]);
    })
    .catch((error: any) => {
      alert('Error getting location'+ JSON.stringify(error));
    });
  }
  // address
  pretifyAddress(address){
    let obj = [];
    let data = "";
    for (let key in address) {
      obj.push(address[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if(obj[val].length)
      data += obj[val]+', ';
    }
    return address.slice(0, -2);
  }
}