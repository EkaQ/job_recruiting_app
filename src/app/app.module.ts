import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*import { Http }      from '@angular/http';*/
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { StudentinscriptionPage } from '../pages/studentinscription/studentinscription';
import { CompanyinscriptionPage } from '../pages/companyinscription/companyinscription';

import { TabsPage } from '../pages/tabs/tabs';
import { StudentPage } from '../pages/student/student';
import { CompanyPage } from '../pages/company/company';
import { DatesPage} from '../pages/dates/dates';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http";
import {LoginPage} from "../pages/login/login";
import {StudentService} from "../services/students";
import {DateService} from "../services/date";
import {CompanyService} from "../services/company";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    StudentinscriptionPage,
    CompanyinscriptionPage,
    StudentPage,
    CompanyPage,
    DatesPage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    StudentPage,
    CompanyPage,
    StudentinscriptionPage,
    CompanyinscriptionPage,
    DatesPage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StudentService,
    DateService,
    CompanyService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
