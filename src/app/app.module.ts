
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
// plugins
import { Media} from '@ionic-native/media';
import { SocialSharing } from '@ionic-native/social-sharing';
import { MyApp } from './app.component';
// pages
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MusicPlayerPage } from './../pages/music-player/music-player';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MusicsProvider } from './../providers/musics/musics';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MusicPlayerPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MusicPlayerPage
  ],
  providers: [
    Media,
    SocialSharing,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MusicsProvider,
    
  ]
})
export class AppModule {}
