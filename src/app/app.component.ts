import {Component} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    subscribe: any;
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private geolocation: Geolocation,
        private router: Router,
        private navCtrl: NavController
    ) {
        this.subscribe = this.platform.backButton.subscribeWithPriority(100, () => {
            if (this.router.url === '/home' || this.router.url === '/splash') {
                // tslint:disable-next-line
                navigator['app'].exitApp();
            }else{
                this.navCtrl.pop();
            }
        });
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
