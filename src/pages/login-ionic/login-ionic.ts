import { Component } from '@angular/core';
import { ListPage } from '../list/list';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login-ionic',
  templateUrl: 'login-ionic.html'
})
export class LoginIonicPage {
  constructor(public navCtrl: NavController ) {

  }

  ClickedMe()
  {
	console.log(this.username);
	console.log(this.password);
  }

  goToRegister()
  {
	this.navCtrl.push(ListPage);
  }  

}

