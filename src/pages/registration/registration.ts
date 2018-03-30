import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  constructor() {

  }

  registerUser(email:string, password:string)
  {	

	this.signupUser(email, password);
			
  }

  signupUser(email: string, password: string) {
      
      return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then( newUser => {
           firebase
           .database()
           .ref('/userProfile')
           .child(newUser.uid)
           .set({ email: email });
       });
  }

}

