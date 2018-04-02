import { Component } from '@angular/core';
import firebase from 'firebase';
import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {LoginIonicPage} from '../login-ionic/login-ionic'

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public nav:NavController,
		private toastCtrl: ToastController) {

  }
  
  logoutUser(): Promise<void> {

     try{     

	const result =  firebase.auth().signOut();

	this.presentToast("Logout success");

	this.nav.setRoot(LoginIonicPage);	

    }catch(e){

	console.error(e);

    }
       

  }

  presentToast(value:string) {
	let toast = this.toastCtrl.create({
	    message: value,
	    duration: 3000,
	    position: 'top'
	});

	toast.present();
  }

}
