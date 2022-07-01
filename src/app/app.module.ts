import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

import { ComponentsModule } from './components/components.module';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule, ReactiveFormsModule, HttpClientModule, IonicStorageModule.forRoot(),ComponentsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },File,FileOpener, Camera,NativeGeocoder,EmailComposer,BarcodeScanner],
  bootstrap: [AppComponent],
})
export class AppModule {}
