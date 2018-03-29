import { Component } from '@angular/core';
import { RegistrationPage } from '../registration/registration';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';

@Component({
  selector: 'page-login-ionic',
  templateUrl: 'login-ionic.html'
})
export class LoginIonicPage {
  constructor(public navCtrl: NavController ) {

  }

  loginUser(email: string, password: string): Promise<any> 
  {	
	return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  goToRegister()
  {
	this.navCtrl.push(RegistrationPage);
  }  

}

