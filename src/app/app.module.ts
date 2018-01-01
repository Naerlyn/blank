import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Abilities1Page } from '../pages/abilities1/abilities1';
import { AbilitiesQPage } from '../pages/abilitiesQ/abilitiesQ';
import { AbilitiesWPage } from '../pages/abilitiesW/abilitiesW';
import { AbilitiesEPage } from '../pages/abilitiesE/abilitiesE';
import { AbilitiesRPage } from '../pages/abilitiesR/abilitiesR';
import { AbilitiesQWPage } from '../pages/abilitiesQ/abilitiesQW/abilitiesQW'
import { AbilitiesQEPage } from '../pages/abilitiesQ/abilitiesQE/abilitiesQE'
import { AbilitiesQRPage } from '../pages/abilitiesQ/abilitiesQR/abilitiesQR'
import { AbilitiesQTHydraPage } from '../pages/abilitiesQ/abilitiesQTHydra/abilitiesQTHydra'
import { AbilitiesQShivPage } from '../pages/abilitiesQ/abilitiesQShiv/abilitiesQShiv'
import { AbilitiesQRFCPage } from '../pages/abilitiesQ/abilitiesQRFC/abilitiesQRFC'
import { AbilitiesQNonePage } from '../pages/abilitiesQ/abilitiesQNone/abilitiesQNone'
import { AbilitiesWQPage } from '../pages/abilitiesW/abilitiesWQ/abilitiesWQ'
import { AbilitiesWEPage } from '../pages/abilitiesW/abilitiesWE/abilitiesWE'
import { AbilitiesWSmitePage } from '../pages/abilitiesW/abilitiesWSmite/abilitiesWSmite'
import { AbilitiesWFlashPage } from '../pages/abilitiesW/abilitiesWFlash/abilitiesWFlash'
import { AbilitiesWNonePage } from '../pages/abilitiesW/abilitiesWNone/abilitiesWNone'
import { AbilitiesEFlashPage } from '../pages/abilitiesE/abilitiesEFlash/abilitiesEFlash'
import { AbilitiesENonePage } from '../pages/abilitiesE/abilitiesENone/abilitiesENone'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage, 
    Abilities1Page,
    AbilitiesQPage,
    AbilitiesWPage,
    AbilitiesEPage,
    AbilitiesRPage, 
    AbilitiesQWPage, 
    AbilitiesQEPage, 
    AbilitiesQRPage,
    AbilitiesQTHydraPage,
    AbilitiesQShivPage,
    AbilitiesQRFCPage,
    AbilitiesQNonePage, 
    AbilitiesWQPage,
    AbilitiesWEPage,
    AbilitiesWSmitePage,
    AbilitiesWFlashPage,
    AbilitiesWNonePage,
    AbilitiesEFlashPage,
    AbilitiesENonePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Abilities1Page,
    AbilitiesQPage,
    AbilitiesWPage,
    AbilitiesEPage,
    AbilitiesRPage,
    AbilitiesQWPage, 
    AbilitiesQEPage, 
    AbilitiesQRPage,
    AbilitiesQTHydraPage,
    AbilitiesQShivPage,
    AbilitiesQRFCPage,
    AbilitiesQNonePage, 
    AbilitiesWQPage,
    AbilitiesWEPage,
    AbilitiesWSmitePage,
    AbilitiesWFlashPage,
    AbilitiesWNonePage,
    AbilitiesEFlashPage,
    AbilitiesENonePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
