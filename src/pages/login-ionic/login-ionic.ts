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
	var res;

	res=this.login(email,password);
	
	var invalide = "There is no user record corresponding to this identifier. The user may have been deleted";

	//	var index = res.localeCompare(invalide);	

	if(res == invalide)
	{
		this.presentToast("Invalid user name");
	}

  }

  login(email:string,password:string): Promise<any>
  {

	return firebase.auth().signInWithEmailAndPassword(email, password);

  }

  presentToast(str:string) {
    let toast = this.toastCtrl.create({
      message: str,
      duration: 3000
    });
    toast.present();
  }

  goToRegister()
  {
	this.navCtrl.push(RegistrationPage);
  }  

}

