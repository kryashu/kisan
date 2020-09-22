import {Component} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private geolocation: Geolocation
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.setLocationPermission();
        });
    }


    setLocationPermission() {
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
}
