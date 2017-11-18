import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, Validators} from "@angular/forms";
import {CompanyService} from "../../services/company";

/**
 * Generated class for the CompanyinscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-companyinscription',
  templateUrl: 'companyinscription.html',
})
export class CompanyinscriptionPage {
  companyForm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private companyService: CompanyService) {
    this.companyForm = this.formBuilder.group({
      'nom': ['', Validators.required],
      'adresse': ['', Validators.required],
      'email': ['', [Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyinscriptionPage');
  }

  saveCompany() {
    if (this.companyForm.dirty && this.companyForm.valid) {
      console.log('nom ' + this.companyForm.value.nom);
      console.log('adresse ' + this.companyForm.value.prenom);
      console.log('email ' + this.companyForm.value.email);

      let company = {
        nom: this.companyForm.value.nom,
        adresse: this.companyForm.value.adresse,
        email: this.companyForm.value.email
      }

      this.companyService.addCompany(company);
      console.log(this.companyService.getCompanies());
    }
  }
}
