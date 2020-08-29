import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {Geolocation} from "@ionic-native/geolocation/ngx";
import {NativeGeocoder} from "@ionic-native/native-geocoder/ngx";


@NgModule({
  providers: [Geolocation, NativeGeocoder],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
