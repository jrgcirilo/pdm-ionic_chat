import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../app/home/home.page';
import { MsgService } from './chat.service';

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import {AngularFireAuthModule} from 'angularfire2/auth'
import {AuthService} from './auth.service'

export const firebaseConfig = {
  apiKey: "AIzaSyC01_i9c-HrB1YBQRtDlYDjSfWwwEK-4Ag",
  authDomain: "ionicchat-35b81.firebaseapp.com",
  databaseURL: "https://ionicchat-35b81.firebaseio.com",
  projectId: "ionicchat-35b81",
  storageBucket: "ionicchat-35b81.appspot.com",
  messagingSenderId: "108763473379",
  appId: "1:108763473379:web:62aa15a9ec2cf9a180acd6"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MsgService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}

