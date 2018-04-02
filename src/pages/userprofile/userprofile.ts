import { Component } from '@angular/core';
import firebase from 'firebase';
import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {LoginIonicPage} from '../login-ionic/login-ionic'

@Component({
  selector: 'page-userprofile',
  templateUrl: 'userprofile.html'
})
export class UserProfilePage {
  public firebaseAuth: any;
  public firebaseUserref: any;
  public firebaseUser: any;
  public resultt: any;
    constructor(private toastCtrl: ToastController,
	      public nav:NavController) {

        this.firebaseAuth = firebase.auth();
        this.firebaseUser = firebase.auth().currentUser.uid;
        this.firebaseUserref = firebase.database().ref('users');
        console.log(this.firebaseUser);
        
  }

  logoutUser() {
    try{     
	    const result =  firebase.auth().signOut();
	    this.presentToast("Logout success");
	    this.nav.setRoot(LoginIonicPage);	
    }catch(e){
	    this.presentToast("Sorry Some error occurs");
    }
  }

  presentToast(value:string) {
 
	let toast = this.toastCtrl.create({
	message: value,
	duration: 3000,
	position: 'bottom'

     });

     toast.present();
  }

}
