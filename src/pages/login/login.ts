import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StudentinscriptionPage } from '../studentinscription/studentinscription';
import { CompanyinscriptionPage } from '../companyinscription/companyinscription';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  nav: NavController;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nav = navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  public changePage() {
    this.nav.push(StudentinscriptionPage);
  }
  public changePageComp() {
    this.nav.push(CompanyinscriptionPage);
  }
}


