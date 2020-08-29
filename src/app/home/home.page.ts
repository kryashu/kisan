import {Component} from '@angular/core';
import {Geolocation, GeolocationOptions, Geoposition} from "@ionic-native/geolocation/ngx";
import {NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult} from "@ionic-native/native-geocoder/ngx";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    options: GeolocationOptions;
    currentPos: Geoposition;
    let
    options1: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
    };
    city = 'abla';

    constructor(private geolocation: Geolocation,
                private nativeGeocoder: NativeGeocoder) {
    }

    ngOnInit() {
        this.getUserPosition();
    }

    getUserPosition() {
        return new Promise((resolve, reject) => {
            this.options = {
                maximumAge: 3000,
                enableHighAccuracy: true
            };

            this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {
                this.currentPos = pos;
                this.getcity(pos.coords.latitude, pos.coords.longitude);
                const location = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                    time: new Date(),
                };
                console.log('loc', location);
                resolve(pos);
            }, (err: PositionError) => {
                console.log("error : " + err.message);
                reject(err.message);
            });
        });
    }

    getcity(latitude, longitude) {
        this.nativeGeocoder.reverseGeocode(latitude, longitude, this.options1)
            .then((result: NativeGeocoderResult[]) => {
                this.city = JSON.stringify(result[0]);
                console.log(JSON.stringify(result[0]))
            })
            .catch((error: any) => console.log(error));
    }
}
