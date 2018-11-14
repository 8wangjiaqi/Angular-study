import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddPage } from '../pages/add/add';
import { MyPage } from  '../pages/my/my';
import { LoginPage } from  '../pages/login/login';
import { Add1Page } from  '../pages/add1/add1';
// import { ShezhiPage } from  '../pages/shezhi/shezhi';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { ShezhiPage } from '../pages/shezhi/shezhi';
import { DengluPage } from '../pages/denglu/denglu';
import { SearchPage } from '../pages/search/search';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddPage,
    MyPage,
    LoginPage,
    Add1Page,
    ShezhiPage,
    DengluPage,
    SearchPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      tabsHideOnSubPages:true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddPage,
    MyPage,
    LoginPage,
    Add1Page,
    ShezhiPage,
    DengluPage,
    SearchPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
