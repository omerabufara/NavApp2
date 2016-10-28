import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { LoginsuccessPage } from '../loginsuccess/loginsuccess';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  login(){

    let modalPage = this.modalCtrl.create(LoginsuccessPage);
    modalPage.present(LoginsuccessPage); //removes back utton

/*    this.navCtrl.push(LoginsuccessPage, {
      myString: "Jeremy"
    });*/
  }

}
