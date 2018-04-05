import { Component } from '@angular/core';
import firebase from 'firebase';
import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { DataSnapshot } from '@firebase/database-types';
import { InsideQueryPage } from '../insidequery/insidequery';
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

    allQueries: Array<{user_id: string, query: string,email: string,desc:string,answer:string}>;
  
    constructor(private toastCtrl: ToastController,
	  public nav:NavController) {

          this.allQueries = [];

          // retriving data from firebase

          var starCountRef = firebase.database().ref('Queries').orderByChild('query');
          let familyList: Array<string>;
          starCountRef.on("value",(snapshot) => {
            //console.log('users', snapshot.val());
            var queries = snapshot.val();
            snapshot.forEach((childSnapshot) => {
              var everyone = childSnapshot.val();

              //catched every single child
              //And the added to the list
              this.allQueries.push({
                user_id: everyone.user_id,
                query: everyone.query,
                email: everyone.email,
                desc: everyone.message,
                answer:everyone.answers,
              });
              console.log(this.allQueries.length);
              console.log(everyone.query);
              console.log(everyone.message); 
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

    goToInsideQuery(event, item){

        this.nav.push(InsideQueryPage, {
          item: item
        });

    }

}
