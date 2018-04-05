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
  NavParams,
  AlertController,
} from 'ionic-angular';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from '../../providers/auth/auth';
import { MainPage } from '../mainpage/mainpage';
import { AnswerHerePage } from '../answerhere/answerhere';

@Component({
  selector: 'page-insidequery',
  templateUrl: 'insidequery.html'
})
export class InsideQueryPage {

  selectedItem: any;

  allAnswers: Array<{user_id: string,answer:string}>;

  constructor(
  public navCtrl: NavController,
  public loadingCtrl: LoadingController,
  public alertCtrl: AlertController,
  public authProvider: AuthProvider,
  public toastCtrl: ToastController,
  public navParams: NavParams,
  public formBuilder: FormBuilder) {

    this.selectedItem = navParams.get('item');
    // var emai = "From:"+this.selectedItem;
    console.log(this.selectedItem);

    this.allAnswers = [];

    var starCountRef = firebase.database().ref('Answers/'+this.selectedItem.answer).orderByChild('answer');
          let familyList: Array<string>;
          starCountRef.on("value",(snapshot) => {
            //console.log('users', snapshot.val());
            var queries = snapshot.val();
            snapshot.forEach((childSnapshot) => {
              var everyone = childSnapshot.val();

              //catched every single child
              //And the added to the list
              this.allAnswers.push({
                user_id: everyone.user_id,
                answer: everyone.answer,
              });
              console.log(this.allAnswers.length); 
              return false; 
            });
          });
    
  }

  
  presentToast(value:string) {
                let toast = this.toastCtrl.create({
                message: value,
                duration: 3000,
                position: 'bottom'
                });
        toast.present();
  }

  goToAnswerHere(){

    this.navCtrl.push(AnswerHerePage,{
      item: this.selectedItem
    });

  }
    
}
