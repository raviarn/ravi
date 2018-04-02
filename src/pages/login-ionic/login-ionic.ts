import { Component } from '@angular/core';
import { RegistrationPage } from '../registration/registration';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
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

	try{

	const res = firebase.auth().signInWithEmailAndPassword(email, password);

	this.presentToast("Login Success");

	this.navCtrl.setRoot(HelloIonicPage);
	
	}catch(e){

		this.presentToast("Sorry Some error occurs");

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

  goToRegister()
  {
	this.navCtrl.push(RegistrationPage);
  }  

}

