import { Component } from '@angular/core';
import { RegistrationPage } from '../registration/registration';
import firebase from 'firebase';
import { ToastController } from 'ionic-angular';
import {
  IonicPage,
  Loading,
  LoadingController,
  NavController,
  AlertController,
} from 'ionic-angular';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-login-ionic',
  templateUrl: 'login-ionic.html'
})
export class LoginIonicPage {

  constructor(
  public navCtrl: NavController,
  public loadingCtrl: LoadingController,
  public alertCtrl: AlertController,
  public authProvider: AuthProvider,
  public toastCtrl: ToastController,
  public formBuilder: FormBuilder) {

  }

  loginUser(email: string, password: string) 
  {	

	var result :any;

	this.login(email,password);
  }

  login(email:string,password:string){

	var index:any;

	firebase.auth().signInWithEmailAndPassword(email, password).then(function(firebaseUser) {

	alert("Login Success");
	
   }).catch(function(error) {

		var errorCode = error.code;
		var errorMessage = error.message;

		console.log(error.message);

		index = errorMessage.localeCompare("There is no user record corresponding to this identifier. The user may have been deleted.");

		if(errorMessage == 'There is no user record corresponding to this identifier. The user may have been deleted.')
		{
			alert("Invalid Username");
		}

		if(errorMessage == 'The password is invalid or the user does not have a password.')
		{
			alert("Invalid Password");
		}			
	});
	
  }

 presentToast() {
                let toast = this.toastCtrl.create({
                message: 'User was added successfully',
                duration: 3000,
                position: 'top'
                });
        toast.present();
        }

  goToRegister()
  {
	this.navCtrl.push(RegistrationPage);
  }  

}

