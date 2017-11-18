import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {CompanyService} from "../../services/company";

/**
 * Generated class for the CompagnyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {

  companyService: CompanyService;

  constructor(public navCtrl: NavController, public navParams: NavParams, companyService: CompanyService, private alertCtrl: AlertController) {
    this.companyService = companyService;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }

  itemSelected(c){
    let alert = this.alertCtrl.create({
      title: 'Detail',
      message: '<p>nom: ' + c.nom + '</p><p>adresse: ' + c.adresse + '</p><p>email: ' + c.email + '</p>',
      buttons: ['Ok']
    });
    alert.present();
  }
}
