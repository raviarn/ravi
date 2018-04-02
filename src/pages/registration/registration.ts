import { Component } from '@angular/core';
import firebase from 'firebase';
import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {HelloIonicPage} from '../hello-ionic/hello-ionic'

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  constructor(private toastCtrl: ToastController,
	      public nav:NavController) {

  }

  registerUser(email:string, password:string)
  {	

	this.signupUser(email, password);
			
  }

  signupUser(email:string, password:string) {

	try{      

      const result = firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then( newUser => {
           firebase
           .database()
           .ref('/userProfile')
           .child(newUser.uid)
           .set({ email: email });
       });
	
	this.presentToast("User created");	

	this.nav.setRoot(HelloIonicPage);

	}catch(e){

		console.error(e);
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

