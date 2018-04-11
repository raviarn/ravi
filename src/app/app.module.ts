import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { LoginIonicPage } from '../pages/login-ionic/login-ionic';
import { RegistrationPage } from '../pages/registration/registration';
import { MainPage } from '../pages/mainpage/mainpage';
import { InboxPage } from '../pages/inbox/inbox';
import { MessagesPage } from '../pages/messages/messages';
import { UserProfilePage } from '../pages/userprofile/userprofile';
import { InsertPage } from '../pages/insert/insert';
import { InsideQueryPage } from '../pages/insidequery/insidequery';
import { AnswerHerePage } from '../pages/answerhere/answerhere';
import { SendMessagePage } from '../pages/sendmessage/sendmessage';
import { ReplyPage } from '../pages/reply/reply';
import { ShowLocatePage } from '../pages/showlocate/showlocate';

import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps,Marker,MarkerOptions } from '@ionic-native/google-maps';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';

export const firebaseConfig = {

    apiKey: "AIzaSyA0AnmZLmy3nIfcbidSkZiPbE4sOTCbFBc",
    authDomain: "antt-f342a.firebaseapp.com",
    databaseURL: "https://antt-f342a.firebaseio.com",
    projectId: "antt-f342a",
    storageBucket: "",
    messagingSenderId: "50612689487"

};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginIonicPage,
    RegistrationPage,
    MainPage,
    InboxPage,
    MessagesPage,
    UserProfilePage,
    InsertPage,
    InsideQueryPage,
    AnswerHerePage,
    SendMessagePage,
    ReplyPage,
    ShowLocatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginIonicPage,
    RegistrationPage,
    MainPage,
    InboxPage,
    MessagesPage,
    UserProfilePage,
    InsertPage,
    InsideQueryPage,
    AnswerHerePage,
    SendMessagePage,
    ReplyPage,
    ShowLocatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth,
    Geolocation,
    GoogleMaps
  ]
})
export class AppModule {}
