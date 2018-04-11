import { Component } from '@angular/core';
import { RegistrationPage } from '../registration/registration';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { ToastController } from 'ionic-angular';
import { MainPage } from '../mainpage/mainpage';
import { Geolocation } from '@ionic-native/geolocation';
import {
  IonicPage,
  Loading,
  LoadingController,
  NavParams,
  AlertController,
} from 'ionic-angular';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';

@Component({
  selector: 'page-answerhere',
  templateUrl: 'answerhere.html'
})

export class AnswerHerePage {

  selected: any;
  public firebaseUserId: any;
  public username:any;
  public lat:any;
  public lon:any

constructor(
  public navCtrl: NavController,
  public toastCtrl: ToastController,
  public navParams: NavParams,
  private geo: Geolocation) {

    this.firebaseUserId = firebase.auth().currentUser.uid;
    this.selected = navParams.get('item');
    // var emai = "From:"+this.selectedItem;
    console.log(this.selected);

    this.username = firebase.auth().currentUser;
  
    var userId = firebase.auth().currentUser.uid;

    this.ionViewOldLoad();

  }

  change() {
    // get elements
    var element   = document.getElementById('messageInputBox');
    var textarea  = element.getElementsByTagName('textarea')[0];

    // set default style for textarea
    textarea.style.minHeight  = '0';
    textarea.style.height     = '0';

    // limit size to 96 pixels (6 lines of text)
    var scroll_height = textarea.scrollHeight;
    if(scroll_height > 320)
      scroll_height = 320;

    // apply new style
    element.style.height      = scroll_height + "px";
    textarea.style.minHeight  = scroll_height + "px";
    textarea.style.height     = scroll_height + "px";
  }

  addMyAnswer(Writtenanswer){

      if(!Writtenanswer)
      {
        this.presentToast("Add Some Answer");

      }

      var ran = Math.floor(Math.random() * (1000000 - 10 + 1)) + 10;
      var random = ran.toString();
      
      var AnswerData = {
        name:this.username.email,
        user_id:this.firebaseUserId,
        answer:Writtenanswer,
        latitude:this.lat,
        longitude:this.lon
      };

      console.log(this.lat);
      console.log(this.lon);

      var answerupdates = {};
      answerupdates['Answers/'+this.selected.answer+'/'+random] = AnswerData;

      try{
        firebase.database().ref().update(answerupdates);
        this.presentToast("Answer added");
      }catch(e)
      {
        this.presentToast("please check your internrt connection");
      }

      this.navCtrl.setRoot(MainPage);

  }

  ionViewOldLoad(){

    this.geo.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude

      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);

      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;

     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geo.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
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

}

