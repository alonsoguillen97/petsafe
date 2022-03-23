import { Component, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation, Environment, GoogleMapOptions,MarkerIcon, MarkerClusterIcon, HtmlInfoWindow } from '@ionic-native/google-maps/ngx';

import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: GoogleMap;

  constructor(private apiService:AuthService,
    private utilities: UtilitiesService,
    private navCtrl: NavController,) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
      
      this.loadMap();

  }

  //Google Maps
  loadMap(){
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCy-u1ZWO1hiRtoSFIMJVzhu6WznIrzK18',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCy-u1ZWO1hiRtoSFIMJVzhu6WznIrzK18'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 36.67929,
           lng: -6.12410
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
    

  }

}
