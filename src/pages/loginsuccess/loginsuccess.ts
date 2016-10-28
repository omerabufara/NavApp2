import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Loginsuccess page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-loginsuccess',
  templateUrl: 'loginsuccess.html'
})
export class LoginsuccessPage {

  buttonText
  constructor(public navCtrl: NavController, private navParams: NavParams) {
      this.buttonText = this.navParams.get('myString');

  }

  popThis(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('Hello Loginsuccess Page');
  }

}
