import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { LoginIonicPage } from '../pages/login-ionic/login-ionic';
import { MainPage } from '../pages/mainpage/mainpage';
import { InboxPage } from '../pages/inbox/inbox';
import { MessagesPage } from '../pages/messages/messages';
import { UserProfilePage } from '../pages/userprofile/userprofile';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page

  pages: Array<{title: string, component: any}>;
  rootPage: any;
  user: any;

  constructor(
    public platform: Platform,
    afAuth: AngularFireAuth,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) 
  {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'User Login Page', component: LoginIonicPage }
    ];

    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if (!user) 
	{
           this.rootPage = LoginIonicPage;
           unsubscribe();
        }  else 
	{
           this.rootPage = MainPage;
           unsubscribe();
        }
    });
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
