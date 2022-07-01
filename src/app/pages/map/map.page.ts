import { Component, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation, Environment, GoogleMapOptions,MarkerIcon, MarkerClusterIcon, HtmlInfoWindow } from '@ionic-native/google-maps/ngx';

import { NavController } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {


  refugio: User;
  refugios: User[]=[];
  map: GoogleMap;
  public markersRefugios: Marker [] = [];
  icon: any;

  constructor(private apiService:AuthService,
    private utilities: UtilitiesService,
    private navCtrl: NavController,) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
      this.refugio = history.state.refugio;
      this.refugios = await this.apiService.getEntity('refugios').toPromise();
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

    this.icon = 'assets/imgs/places.png';


    for(let refugio of this.refugios){
        
      this.añadirMarket(refugio,refugio.latitude,refugio.longitude)
    
    }
    

  }

  public añadirMarket(refugio: User, lat: any, lng: any):void {
    
    
    let icon: MarkerIcon = {
      url: "https://i.ibb.co/CwwH27B/places.png",
      size: {
        width: 32,
        height: 32
      }
    };
    
  
    let marker: Marker = this.map.addMarkerSync({
      animation:'Drop',
      icon: icon,
      position: {
        lat: lat,
        lng: lng
      }
    });

    this.markersRefugios.push(marker);

    let htmlInfoWindow = new HtmlInfoWindow();
    let frame: HTMLElement = document.createElement('div');

    frame.innerHTML = [
      '<ion-item lines="none" style="height:100px;--background:transparent !important;margin-top:2vh;">','<img style="width:80px;height:80px;margin-right:4vw;border-radius:100px;"', "src=" + refugio.image + ">",'<ion-col><ion-label style="font-size:13px;font-weight:bold;">'+refugio.name+'</ion-label><ion-label style="font-size:13px;font-weight:bold;color: #5a9473;">'+refugio.location+'</ion-label><ion-button style="--box-shadow:none;margin-left: 2vw;width: 15vw;--background: #5a9473;color: white;">Ver</ion-button></ion-col></ion-item>',
    ].join("");
    frame.getElementsByTagName("ion-button")[0].addEventListener("click", () =>{
      this.goToInteriorRefugio(refugio);
    });

    htmlInfoWindow.setContent(frame,{
      width: "320px",
      height: "120px"
    });
  

    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      htmlInfoWindow.open(marker);
    });

    if(this.refugio != null){
    this.localizar();
    }else{
      this.localizarUser();
    }
  
  
  } 

  public async localizar(){
    
    console.log('localizar');
    
    this.map.getMyLocation().then((location:MyLocation) =>{
      this.map.animateCamera({
        target: {lat: this.refugio.latitude, lng: this.refugio.longitude},
        zoom:17,
        tilt:30
      });
    });
  }


  public async localizarUser(){
    //this.map.clear();
    console.log('localizar');
    
    this.map.getMyLocation().then((location:MyLocation) =>{
      this.map.animateCamera({
        target: location.latLng,
        zoom:17,
        tilt:30
      });

  });
}
  //Fin Google Maps

  goToInteriorRefugio(refugio: User) {
    
    this.navCtrl.navigateForward('/refugio-interior', {
      state: {
        refugio: refugio
      }
    });
  }

}
