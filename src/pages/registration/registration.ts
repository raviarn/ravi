import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  constructor() {

  }

  registerUser()
  {
	email: string; password: string;
	email =this.regemail;
	password =this.regpassword;

		
  }

}

