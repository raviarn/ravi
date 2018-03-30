import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {

  }
  
  logoutUser(): Promise<void> {
     
     return firebase.auth().signOut();
  
  }

}
