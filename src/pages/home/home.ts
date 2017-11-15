import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentinscriptionPage } from '../studentinscription/studentinscription';
import { CompanyinscriptionPage } from '../companyinscription/companyinscription';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nav: NavController;
  constructor(public navCtrl: NavController) {
    this.nav = navCtrl;
  }
  public changePage() {
    this.nav.push(StudentinscriptionPage);
  }
  public changePageComp() {
    this.nav.push(CompanyinscriptionPage);
  }
}
